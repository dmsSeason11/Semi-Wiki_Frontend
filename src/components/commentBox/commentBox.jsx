import React, { useState, useEffect } from "react";
import { Box, Title, InputArea, ViewArea } from "./commentBox.styles";
import Comment from "../comment/comment";

function CommentBox({ boardId }) {
  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const token = localStorage.getItem("accessToken");

  const [commentInput, setCommentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState([]);

  // 🧩 댓글 조회
  useEffect(() => {
    if (!boardId) return;

    async function fetchComments() {
      const now = new Date().toLocaleString();
      console.log(`[댓글 조회 시작] boardId=${boardId}, 시간=${now}`);

      try {
        const res = await fetch(`${API_BASE}/comment/${boardId}`, {
          method: "GET",
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        if (res.status === 200) {
          const data = await res.json();
          const parsed = Array.isArray(data) ? data : [data];
          const formatted = parsed.map((c, idx) => ({
            id: idx + 1,
            userId: c.accountId ?? "익명",
            date: (c.wroteAt || new Date().toISOString()).slice(0, 10),
            body: c.contents ?? "",
          }));

          setComments(formatted);
          console.log(`[댓글 조회 성공] 총 ${formatted.length}개, 시간=${now}`);
        } else if (res.status === 404) {
          console.warn(
            `[댓글 조회 실패: 404] 게시판 없음, boardId=${boardId}, 시간=${now}`
          );
          setComments([]);
        } else if (res.status === 401) {
          alert("로그인이 필요합니다.");
          console.warn(`[댓글 조회 실패: 401] 인증 실패, 시간=${now}`);
        } else {
          console.error(`[댓글 조회 실패] 상태코드=${res.status}, 시간=${now}`);
        }
      } catch (err) {
        console.error(
          `[댓글 조회 중 오류] message=${err.message}, 시간=${now}`
        );
      }
    }

    fetchComments();
  }, [boardId]);

  // ✅ 댓글 등록 요청
  async function submitComment() {
    const text = commentInput.trim();
    if (!text || isSubmitting) return;
    if (!boardId) return alert("boardId가 지정되지 않았습니다.");

    const now = new Date().toLocaleString();
    console.log(
      `[댓글 등록 시도] boardId=${boardId}, 내용="${text}", 시간=${now}`
    );

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/comment/${boardId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ contents: text }),
      });

      if (res.status === 201) {
        const created = await res.json();
        const newComment = {
          id: Date.now(),
          userId: created.accountId ?? "익명",
          date: (created.wroteAt || new Date().toISOString()).slice(0, 10),
          body: created.contents ?? text,
        };

        setComments((prev) => [newComment, ...prev]);
        setCommentInput("");

        console.log(
          `[댓글 등록 성공] 작성자=${newComment.userId}, 내용="${newComment.body}", 시간=${now}`
        );
        return;
      }

      let errBody;
      try {
        errBody = await res.json();
      } catch {
        errBody = await res.text();
      }

      switch (res.status) {
        case 400:
          console.warn(`[댓글 등록 실패: 400] 잘못된 요청, 시간=${now}`);
          break;
        case 401:
          alert("로그인 세션이 만료되었습니다.");
          console.warn(
            `[댓글 등록 실패: 401] 인증 실패, 토큰 만료 또는 무효, 시간=${now}`
          );
          break;
        case 404:
          console.warn(
            `[댓글 등록 실패: 404] 게시판 없음, boardId=${boardId}, 시간=${now}`
          );
          break;
        default:
          console.error(
            `[댓글 등록 실패: ${res.status}] 응답=${errBody}, 시간=${now}`
          );
      }
    } catch (err) {
      console.error(`[댓글 등록 중 오류] message=${err.message}, 시간=${now}`);
    } finally {
      setIsSubmitting(false);
      console.log(
        `[댓글 등록 프로세스 종료] isSubmitting=false, 시간=${new Date().toLocaleString()}`
      );
    }
  }

  return (
    <Box>
      <Title>댓글</Title>

      <InputArea
        id="commentInput"
        placeholder="댓글을 작성해주세요"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submitComment();
          }
        }}
      />

      <ViewArea>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              userId={comment.userId}
              date={comment.date}
              body={comment.body}
            />
          ))
        ) : (
          <p style={{ color: "#999", fontSize: "0.9rem" }}>
            아직 댓글이 없습니다.
          </p>
        )}
      </ViewArea>
    </Box>
  );
}

export default CommentBox;

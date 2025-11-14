import React, { useState, useEffect, useRef } from "react";
import { Box, Title, InputArea, ViewArea } from "./commentBox.styles";
import Comment from "../comment/comment";

function CommentBox({ boardId }) {
  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const token = localStorage.getItem("accessToken");

  const textRef = useRef(null);

  const [commentInput, setCommentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const textarea = textRef.current;
    if (!textarea) return;
    textarea.style.height = `60px`;
  }, []);

  // 날짜 포맷 (YYYY-MM-DD HH:MM)
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}`;
  }

  // 댓글 조회
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

        const msg = await res.text();

        if (res.status === 200 || res.status === 201) {
          const data = JSON.parse(msg);
          console.log("[서버 응답 원본 JSON]", data);

          const parsed = Array.isArray(data) ? data : [data];
          const formatted = parsed
            .map((c, idx) => ({
              id: idx + 1,
              userId: c.accountId ?? "익명",
              date: formatDate(c.modificatedAt || c.wroteAt || new Date()),
              body: c.contents ?? "",
            }))
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );

          setComments(formatted);
          console.log("[가공된 댓글 JSON]", formatted);
          console.log(`[댓글 조회 성공] 총 ${formatted.length}개, 시간=${now}`);
        }

        // 에러 코드 처리
        else if (res.status === 400) {
          console.warn(`[댓글 조회 실패: 400] 잘못된 요청. 서버 메시지=${msg}`);
        } else if (res.status === 401) {
          if (msg === "token is expired")
            console.warn(`[401] 토큰이 만료되었습니다. (${msg})`);
          else if (msg === "token is invalid")
            console.warn(`[401] 유효하지 않은 토큰입니다. (${msg})`);
          else console.warn(`[401] 인증 실패. 메시지=${msg}`);
        } else if (res.status === 404) {
          if (msg === "notice board not found")
            console.warn(`[404] 게시판을 찾을 수 없습니다. (${msg})`);
          else console.warn(`[404] 알 수 없는 리소스 없음. 메시지=${msg}`);
        } else {
          console.error(
            `[댓글 조회 실패] 상태코드=${res.status}, 메시지=${msg}`
          );
        }
      } catch (err) {
        console.error(`[댓글 조회 오류] ${err.message}`);
      }
    }

    fetchComments();
  }, [boardId]);

  // 입력 핸들러
  const handleInput = (e) => {
    setCommentInput(e.target.value);

    const textarea = textRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (textarea.scrollHeight <= 82) {
      textarea.style.height = `60px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitComment();
    }
  };

  // 댓글 등록
  async function submitComment() {
    const text = commentInput.trim();
    if (!text || isSubmitting) return;
    if (!boardId) {
      console.warn("[댓글 등록 실패] boardId가 지정되지 않았습니다.");
      return;
    }

    const now = new Date().toLocaleString();
    console.log(`[댓글 등록 시도] 내용="${text}", 시간=${now}`);

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

      const msg = await res.text();

      if (res.status === 201) {
        const created = JSON.parse(msg);
        const wroteAt = created.wroteAt || new Date().toISOString();

        const newComment = {
          id: Date.now(),
          userId: created.accountId ?? "익명",
          date: formatDate(wroteAt),
          body: created.contents ?? text,
        };

        setComments((prev) => [newComment, ...prev]);
        setCommentInput("");
        console.log(`[댓글 등록 성공]`, newComment);
      }

      // 에러 코드 처리
      else if (res.status === 400) {
        if (msg === "comment not valid")
          console.warn(
            `[400] 댓글 유효성 검사 실패 (줄넘김 10줄 초과 등). (${msg})`
          );
        else console.warn(`[400] 잘못된 요청. 메시지=${msg}`);
      } else if (res.status === 401) {
        if (msg === "token is expired")
          console.warn(`[401] 토큰이 만료되었습니다. (${msg})`);
        else if (msg === "token is invalid")
          console.warn(`[401] 유효하지 않은 토큰입니다. (${msg})`);
        else console.warn(`[401] 인증 실패. 메시지=${msg}`);
      } else if (res.status === 404) {
        if (msg === "notice board not found")
          console.warn(`[404] 게시판을 찾을 수 없습니다. (${msg})`);
        else if (msg === "user not found")
          console.warn(`[404] 댓글 작성자를 찾을 수 없습니다. (${msg})`);
        else console.warn(`[404] 리소스 없음. 메시지=${msg}`);
      } else {
        console.error(`[댓글 등록 실패] 상태코드=${res.status}, 메시지=${msg}`);
      }
    } catch (err) {
      console.error(`[댓글 등록 오류] ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box>
      <Title>댓글</Title>

      <InputArea
        ref={textRef}
        id="commentInput"
        placeholder="댓글을 작성해주세요"
        value={commentInput}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        maxLength={255}
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

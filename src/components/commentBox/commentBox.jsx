import React from "react";
import { Box, Title, InputArea, ViewArea } from "./commentBox.styles";
import Comment from "../comment/comment";
import { useState } from "react";

function CommentBox() {
  const [comments, setComments] = useState([
    {
      id: 1,
      userId: "user123",
      date: "2024-06-01",
      body: "This is the first comment!",
    },
    {
      id: 2,
      userId: "user456",
      date: "2024-06-02",
      body: "This is the second comment!",
    },
  ]);
  return (
    <Box>
      <Title>댓글</Title>
      <InputArea placeholder="댓글을 작성해주세요" />
      <ViewArea>
        {" "}
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            userId={comment.userId}
            date={comment.date}
            body={comment.body}
          />
        ))}
      </ViewArea>
    </Box>
  );
}

export default CommentBox;

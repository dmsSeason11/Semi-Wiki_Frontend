import React from "react";
import {
  CommentContainer,
  Left,
  Right,
  Profile,
  InfoBox,
  UserId,
  WriteDate,
  Text,
} from "./comment.styles";
import profile from "../../assets/comment_profile.svg";

const Comment = ({ userId, date, body }) => {
  return (
    <CommentContainer>
      <Left>
        <Profile src={profile} alt="Profile" />
      </Left>
      <Right>
        <InfoBox className="comment">
          <UserId className="comment-user">{userId}</UserId>
          <WriteDate className="comment-date">{date}</WriteDate>
        </InfoBox>
        <Text>{body}</Text>
      </Right>
    </CommentContainer>
  );
};

export default Comment;

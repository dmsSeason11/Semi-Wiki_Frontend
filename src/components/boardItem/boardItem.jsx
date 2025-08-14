import "../../styles/reset.css";
import { Link } from "react-router-dom";
import {
  BoardItemContainer,
  Title,
  Categories,
  CategoryTag,
  Modifier,
  LinkStyle
} from "./boardItem.styles";

function BoardItem({ id, title, categories, modifier }) {
  return (
    <BoardItemContainer $isFirst={id===1}>
      <LinkStyle to={`/board/${id}`} style={{ textDecoration: 'none' }}>
        <Title>{title}</Title>
      </LinkStyle>
      <Categories>
        {categories.map((category, index) => (
          <CategoryTag key={index}>{category}</CategoryTag>
        ))}
      </Categories>
      <Modifier>{modifier}</Modifier>
    </BoardItemContainer>
  );
}

export default BoardItem;

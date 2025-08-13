import "../../styles/reset.css";
import {
  BoardItemContainer,
  Title,
  Categories,
  CategoryTag,
  Modifier,
} from "./boardItem.styles";

function BoardItem({ id, title, categories, modifier }) {
  return (
    <BoardItemContainer $isFirst={id===1}>
      <Title>{title}</Title>
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

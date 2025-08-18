import {
  Number,
  Title,
  Wrapper,
  Modify,
  ArticleContent,
  ArtcileTopWrapper,
  ArticleContentWrapper,
} from "./Article.styles";

function Article({Numberprop, Titleprop, childrenprop}) {
  return (
    <Wrapper>
      <ArtcileTopWrapper>
        <Number>{Numberprop}.</Number>
        <Title>{Titleprop}</Title>
        <Modify>수정</Modify>
      </ArtcileTopWrapper>

      <ArticleContentWrapper>
        <ArticleContent>{childrenprop}</ArticleContent>
      </ArticleContentWrapper>
    </Wrapper>
  );
}

export default Article;

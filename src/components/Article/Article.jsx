import {
  Number,
  Title,
  Wrapper,
  Modify,
  ArticleContent,
  ArtcileTopWrapper,
  ArticleContentWrapper,
} from "./Article.styles";

function Article({ Numberprop, Titleprop, childrenprop, subSections }) {
  console.log(subSections);
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

      {subSections && subSections.length > 0 && (
        <div>
          {subSections.map((sub) => (
            <Article
              key={sub.id}
              Numberprop={sub.headerNumber}
              Titleprop={sub.title}
              childrenprop={sub.contents}
              subSections={sub.children}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default Article;

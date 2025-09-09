import { Viewer } from "@toast-ui/react-editor";
import {
  Number,
  Title,
  Wrapper,
  ArticleContent,
  ArticleTopWrapper,
  ArticleContentWrapper,
  GlobalViewerStyle,
} from "./Article.styles";

function Article({ Numberprop, Titleprop, childrenprop, subSections }) {
  console.log(subSections);
  const markdown = childrenprop;
  
  return (
    <>
      <GlobalViewerStyle />
      <Wrapper>
        <ArticleTopWrapper>
          <Number>{Numberprop}.</Number>
          <Title>{Titleprop}</Title>
        </ArticleTopWrapper>

        <ArticleContentWrapper>
          <ArticleContent>
            <Viewer initialValue={markdown} />
          </ArticleContent>
        </ArticleContentWrapper>

        {subSections && subSections.length > 0 && (
          <>
            {subSections.map((sub) => (
              <Article
                key={sub.id}
                Numberprop={sub.headerNumber}
                Titleprop={sub.title}
                childrenprop={sub.contents}
                subSections={sub.children}
              />
            ))}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default Article;
import { TOCContents, TOCsubContents } from "./TableOfContents.styles";

function TableOfContents({ contents }) {
  return (
    <TOCContents>
      {contents.map((item) => (
        <li key={item.number}>
          {item.number}. {item.title}
          {item.children && item.children.length > 0 && (
            <TOCsubContents>
              {item.children.map((sub) => (
                <li key={sub.number}>
                  {sub.number} {sub.title}
                </li>
              ))}
            </TOCsubContents>
          )}
        </li>
      ))}
    </TOCContents>
  );
}

export default TableOfContents;

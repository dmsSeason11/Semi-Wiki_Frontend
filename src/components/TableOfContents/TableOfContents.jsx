import { TOCContents, TOCsubContents } from "./TableOfContents.styles";

function TableOfContents({ sections }) {
  return (
    <TOCContents>
      {sections.map((item) => (
        <li key={item.id}>
          {item.headerNumber}. {item.title}
          {item.children && item.children.length > 0 && (
            <TOCsubContents>
              {item.children.map((sub) => (
                <li key={sub.id}>
                  {sub.headerNumber} {sub.title}
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

import { TOCContents, TOCsubContents } from "./TableOfContents.styles";

function TableOfContentsItem({ section }) {
  return (
    <li>
      {section.headerNumber}. {section.title}
      {section.children && section.children.length > 0 && (
        <TOCsubContents>
          {section.children.map((sub) => (
            <TableOfContentsItem key={sub.id} section={sub} />
          ))}
        </TOCsubContents>
      )}
    </li>
  );
}

function TableOfContents({ sections }) {
  return (
    <TOCContents>
      {sections.map((section) => (
        <TableOfContentsItem key={section.id} section={section} />
      ))}
    </TOCContents>
  );
}

export default TableOfContents;

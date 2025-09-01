import {
  PaginationContainer,
  PageButton,
  ArrowButton,
} from "./Pagination.styles";
import PrevIcon from "../../assets/pagination/Arrow left.svg";
import NextIcon from "../../assets/pagination/Arrow right.svg";

function Pagination({ currentPage, totalPages, onPageChange, groupSize = 10 }) {
  const safeTotal = Math.max(1, Number(totalPages) || 1);

  const groupStart = Math.floor((currentPage - 1) / groupSize) * groupSize + 1;

  const pages = Array.from({ length: groupSize }, (_, i) => groupStart + i);

  const canGoPrev = groupStart > 1;
  const canGoNext = groupStart + groupSize <= safeTotal;

  const goPrevGroup = () => {
    if (canGoPrev) onPageChange(groupStart - groupSize);
  };

  const goNextGroup = () => {
    if (canGoNext) onPageChange(groupStart + groupSize);
  };

  return (
    <PaginationContainer>
      <ArrowButton onClick={goPrevGroup} disabled={!canGoPrev}>
        <img src={PrevIcon} />
      </ArrowButton>
      {pages.map((p) => {
        const isdisabled = p > safeTotal;
        const isActive = p === currentPage;

        return (
          <PageButton
            key={p}
            onClick={() => onPageChange(p)}
            disabled={isdisabled}
            $active={isActive}
          >
            {p}
          </PageButton>
        );
      })}
      <ArrowButton onClick={goNextGroup} disabled={!canGoNext}>
        <img src={NextIcon} />
      </ArrowButton>
    </PaginationContainer>
  );
}

export default Pagination;

import css from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  onClick: (page: number) => void;
}

export default function Pagination({ currentPage, onClick }: PaginationProps) {
  const handlePageClick = () => {
    onClick(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button className={css.button} onClick={handlePageClick}>
        Load More
      </button>
    </>
  );
}

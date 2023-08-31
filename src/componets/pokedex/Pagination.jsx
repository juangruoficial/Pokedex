const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const handleClickNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleClickPrevPage = () => {
    const FIRST_PAGE = 1;
    setCurrentPage((prevState) => {
      const prevPage = prevState - 1;
      if (prevPage >= FIRST_PAGE) return prevPage;
      return prevState;
    });
  };

  const handleLastPage = () => {
    setCurrentPage(lastPage);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  return (
    <ul className="w-60 flex justify-center gap-4 p-4">
      {currentPage > 1 && <li onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage > 1 && <li onClick={handleClickPrevPage}>{"<"}</li>}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-2 ${
            currentPage === page ? "text-white bg-red-500 " : ""
          }`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
      {currentPage < lastPage && <li onClick={handleClickNextPage}>{">"}</li>}
      {currentPage < lastPage && <li onClick={handleLastPage}>{">>"}</li>}
    </ul>
  );
};
export default Pagination;

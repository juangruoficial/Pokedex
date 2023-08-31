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
    <ul className="flex justify-center items-center gap-2 md:gap-4 p-4">
      {currentPage > 1 && (
        <li
          className="cursor-pointer hover:text-red-500 transition"
          onClick={handleFirstPage}
        >
          <i className="bx bxs-chevrons-left text-xl"></i>
        </li>
      )}
      {currentPage > 1 && (
        <li
          className="cursor-pointer hover:text-red-500 transition"
          onClick={handleClickPrevPage}
        >
          <i className="bx bxs-chevron-left bx-flashing text-2xl"></i>
        </li>
      )}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-2 ${
            currentPage === page
              ? "text-white bg-red-500"
              : "cursor-pointer hover:bg-red-100"
          }`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
      {currentPage < lastPage && (
        <li
          className="cursor-pointer hover:text-red-500 transition"
          onClick={handleClickNextPage}
        >
          <i
            className="bx bx-chevron-right bx-flashing bx-flip-vertical text-2xl 
          "
          ></i>
        </li>
      )}
      {currentPage < lastPage && (
        <li
          className="cursor-pointer hover:text-red-500 transition"
          onClick={handleLastPage}
        >
          <i className="bx bxs-chevrons-right text-xl"></i>
        </li>
      )}
    </ul>
  );
};

export default Pagination;

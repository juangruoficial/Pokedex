const paginationData = (items, currentPage) => {
  //Cantidad de items por pagina
  const ITEMS_PER_PAGE = 20;

  //Pagina actual
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const itemsCurrentPage = items.slice(indexOfFirstItem, indexOfLastItem);

  //Ultima Pagina
  const lastPage = Math.ceil(items.length / ITEMS_PER_PAGE);

  //Bloque actual
  const PAGES_PER_BLOCK = 5;
  const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

  /* const prevPage = currentBlock === 1 ? 1 : firstPage - 1;
  const nextPage = lastPage >= totalPages ? totalPages : lastPage + 1; */

  //Paginas que se van a mostarr en la posicion actual
  const pagesInCurrentBlock = [];
  const maxPages = actualBlock * PAGES_PER_BLOCK;
  const minPages = maxPages - PAGES_PER_BLOCK + 1;
  for (let i = minPages; i <= maxPages; i++) {
    if (i <= lastPage) {
      pagesInCurrentBlock.push(i);
    }
  }

  return {
    itemsCurrentPage,
    lastPage,
    pagesInCurrentBlock,
  };
};

export { paginationData };

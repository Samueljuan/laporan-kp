import ReactPaginate from "react-paginate";

function Pagination({ itemsPerPage }) {
  // const [currentItems, setCurrentItems] = useState(null);
  // const [pageCount, setPageCount] = useState(0);
  // // Here we use item offsets; we could also use page offsets
  // // following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(items.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(items.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <>
      <ReactPaginate
        // onPageChange={handlePageClick}
        // pageCount={pageCount}
        // renderOnZeroPageCount={null}

        //  real
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={".."}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        activeClassName={"active"}
        pageClassName={"page-item page-link"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={
          "pagination react-paginate flex justify-end my-2 pr-1"
        }

      />
    </>
  );
}

export default Pagination;

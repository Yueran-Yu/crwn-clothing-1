import ReactPaginate from "react-paginate";
import React from 'react';
import Wrapper from "./pagination.style";

const Pagination = ({pageCount, changePage}) => (
  <Wrapper>
    <ReactPaginate previousLabel={'<'}
                   nextLabel={'>'}
                   pageCount={pageCount}
                   breakLabel={"..."}
                   breakClassName={"break-me"}
                   onPageChange={changePage}
                   marginPagesDisplayed={1}
                   pageRangeDisplayed={3}
                   containerClassName={'paginationBttns'}
                   previousLinkClassName={'previousBttn'}
                   nextLinkClassName={'nextBttn'}
                   disabledClassName={'paginationDisabled'}
                   activeClassName={'paginationActive'}/>
  </Wrapper>
);

export default Pagination;

import React, { FC } from "react";
import Pagination from "react-js-pagination";

type IPaginate = {
  postPerPage: number;
  totalCards: number;
  activePage: number;
  paginate(pageNumber: number): void;
};

const PaginationPage: FC<IPaginate> = (props) => {
  const { totalCards, postPerPage, paginate, activePage } = props;

  return (
    <div className="pagination pagination-lg">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={postPerPage}
        totalItemsCount={totalCards}
        pageRangeDisplayed={5}
        onChange={paginate}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};

export default PaginationPage;

import React, { FC } from "react";
import { Pagination } from "react-bootstrap";

type IPaginate = {
  postPerPage: number;
  totalCards: number;
  activePage: number;
  paginate(pageNumber: number): void;
};

const PaginationPage: FC<IPaginate> = (props) => {
  const { totalCards, postPerPage, paginate, activePage } = props;
  let pageNumbers: any = [];

  for (let i = 1; i <= Math.ceil(totalCards / postPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        active={i === activePage}
        onClick={() => paginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div className="pagination pagination-lg">
      <Pagination>{pageNumbers}</Pagination>
    </div>
  );
};

export default PaginationPage;

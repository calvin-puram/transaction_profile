import React, { FC } from "react";

type IPaginate = {
  postPerPage: number;
  totalCards: number;
  paginate(pageNumber: number): void;
};

const PaginationPage: FC<IPaginate> = (props) => {
  const { totalCards, postPerPage, paginate } = props;
  let pageNumbers: any = [];

  for (let i = 1; i <= Math.ceil(totalCards / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination pagination-lg">
      {pageNumbers.map((page: number) => {
        return (
          <li className="page-item">
            <a className="page-link" href="!#" onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        );
      })}
    </div>
  );
};

export default PaginationPage;

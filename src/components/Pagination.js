import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {currentPage - 1 > 0 && (
                <a
                    className="bg-danger text-white rounded-circle p-4"
                    id="pagination"
                    key={currentPage - 1}
                    onClick={() => paginate(currentPage - 1)}
                >
                    {"<"}
                </a>
            )}
            {currentPage < totalPosts / postsPerPage && (
                <a
                    className="bg-danger text-white rounded-circle p-4"
                    id="pagination"
                    key={currentPage + 1}
                    onClick={() => paginate(currentPage + 1)}
                >
                    {">"}
                </a>
            )}
        </div>
        /* <div>
            {pageNumbers.map((number) => (
                <a
                    className="bg-danger text-white rounded-circle p-2"
                    id="pagination"
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </a>
            ))}
        </div> */
    );
};

export default Pagination;

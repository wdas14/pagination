import React from 'react';

const Pagination = ({postsPerPage, totalPosts, handleClick, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            {pageNumbers.map(pageNumber => (
                <a className={pageNumber === currentPage ? 'selectedPage' : null}key={pageNumber} href="!#" onClick={() => handleClick(pageNumber)}>{pageNumber}</a>
            ))}
        </div>
    )
}

export default Pagination
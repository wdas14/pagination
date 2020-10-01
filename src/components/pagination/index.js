import React from 'react';

const Pagination = ({postsPerPage, totalPosts, handleClick, handlePrevNext, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            <a href="!#" onClick={() => handlePrevNext(currentPage, 'prev')}>Prev...</a>
            {pageNumbers.map(pageNumber => (
                <a className={pageNumber === currentPage ? 'selectedPage' : null}key={pageNumber} href="!#" onClick={() => handleClick(pageNumber)}>{pageNumber}</a>
            ))}
            <a href="!#" onClick={() => handlePrevNext(currentPage, 'next')}>Next...</a>
        </div>
    )
}

export default Pagination
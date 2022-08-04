import React from 'react';
import {getPagesArary} from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pageArray = getPagesArary(totalPages);
    return (
        <div className="pages__wrapper">
            {pageArray.map(p => <span
                key={p}
                onClick={() => changePage(p)}
                className={page === p ? 'page page__current' : 'page'}>
                    {p}
                </span>)}
        </div>
    );
};

export default Pagination;
import React, { useState } from "react";

function Pagination({ pageProp, goBack, goAhead }) {
    return (
        <>
            <div className="w-full flex justify-center mb-8">
                {/* prev buttonwith goBack function which comes from movies page */}
                <button
                    className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl"
                    onClick={goBack}
                >
                    Prev
                </button>

                {/* page number comes from movie page as pageProp */}
                <div className="p-2 border-2 border-indigo-500 text-indigo-500 bg-indigo-50">
                    {pageProp}
                </div>

                {/* next button with goAhead function which comes from movies page */}
                <button
                    className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl"
                    onClick={goAhead}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default Pagination;

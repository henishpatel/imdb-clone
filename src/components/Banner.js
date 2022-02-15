import React from "react";
import Image from "../banner.jpg";

function Banner() {
    return (
        <>
            <div
                className={`bg-[url(${Image})] h-[60vh] bg-center bg-cover flex items-end`}
            >
                <div className="text-2xl text-bold text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50 font-bold">
                    The King's Man
                </div>
            </div>
        </>
    );
}

export default Banner;
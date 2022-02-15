import React from "react";
import Image from "../banner.jpg";

function Movies() {
    return (
        <>
            <div className="mb-8">
                <div className="mt-8 mb-8 font-bold text-2xl text-center">
                    Trending Movies
                </div>
                <div className="flex flex-wrap justify-center">
                    <div
                        className={`bg-[url(${Image})] h-[30vh] w-[150px] bg-center bg-cover flex items-end rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
                    >
                        <div className="w-full text-white text-center py-2 bg-gray-900 rounded-b-xl ">
                            Movie Name
                        </div>
                    </div>
                    <div
                        className={`bg-[url(${Image})] h-[30vh] w-[150px] bg-center bg-cover flex items-end rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
                    >
                        <div className="w-full text-white text-center py-2 bg-gray-900 rounded-b-xl ">
                            Movie Name
                        </div>
                    </div>
                    <div
                        className={`bg-[url(${Image})] h-[30vh] w-[150px] bg-center bg-cover flex items-end rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
                    >
                        <div className="w-full text-white text-center py-2 bg-gray-900 rounded-b-xl ">
                            Movie Name
                        </div>
                    </div>
                    <div
                        className={`bg-[url(${Image})] h-[30vh] w-[150px] bg-center bg-cover flex items-end rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}
                    >
                        <div className="w-full text-white text-center py-2 bg-gray-900 rounded-b-xl ">
                            Movie Name
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;

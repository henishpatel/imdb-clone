import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner() {

    // moive state to store a trending movie which goes on to the banner
    const [movie, setMovie] = useState({});

    // hook to get moive from api and store it in state
    useEffect(function () {
        axios
            .get(
                "https://api.themoviedb.org/3/trending/movie/week?api_key=e6abe388afb3846de1e15d19c6958c99&page=1"
            )
            .then((res) => {
                setMovie(res.data.results[0]);
            });
    }, []);
    return (
        <>
            {/* movie poster */}
            <div
                className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end rounded-b-2xl`}
            >
                {/* movie title */}
                <div className="text-xl md:text-2xl text-bold text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50 font-bold rounded-2xl">
                    {movie.title}
                </div>
            </div>
        </>
    );
}

export default Banner;

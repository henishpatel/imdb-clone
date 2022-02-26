import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner"; // spinner for loading
import Pagination from "./Pagination";

function Movies() {
    const [movies, setMovies] = useState([]); // moives array fetch from api
    const [page, setPage] = useState(1); // page state to control pagination
    const [hover, setHover] = useState(""); // hover state to store id to manage 😍/❌ button on moive
    const [favourites, setFavourites] = useState([]); // favourites array which is created by user by clicking fav icon onn movie

    // goAhead function for next page in pagination
    function goAhead() {
        setPage(page + 1);
    }

    // goBack function for prev page in pagination
    function goBack() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    // hook to fetch list of movies from api and then store on to movies state
    useEffect(
        function () {
            axios
                // I here use tmdi api to fetch data
                .get(
                    `https://api.themoviedb.org/3/trending/movie/week?api_key=e6abe388afb3846de1e15d19c6958c99&page=${page}`
                )
                .then((res) => {
                    setMovies(res.data.results);

                    // runs every time when page reload
                    let oldFav = localStorage.getItem("imdb");
                    oldFav = JSON.parse(oldFav);
                    setFavourites([...oldFav]);
                });
        },
        [page]
    );

    // add function to add movie onto favourites when user click on 😍
    let add = (movie) => {
        let newArray = [...favourites, movie];
        setFavourites([...newArray]);
        // Storing the list of Fav into local storage
        localStorage.setItem("imdb", JSON.stringify(newArray));
    };

    // remove function remove movie from fav when user click on ❌
    let del= (movie) => {
        let newArray = favourites.filter((m) => m.id != movie.id);
        setFavourites([...newArray]);
        localStorage.setItem("imdb", JSON.stringify(newArray));
    };

    return (
        <>
            <div className="mb-8">
                {/* trending moives text div */}
                <div className="mt-8 mb-8 font-bold text-2xl text-center ">
                    Trending Movies
                </div>

                {/* ternary operator to check if moive is fetched or not */}
                {movies.length == 0 ? (
                    // if moives is not fetched, then display loader
                    <div className="flex justify-center">
                        <Oval
                            height="100"
                            width="100"
                            color="grey"
                            secondaryColor="grey"
                            ariaLabel="loading"
                        />
                    </div>
                ) : (
                    // if moives is fetched, then display movies in cards
                    <div className="flex flex-wrap justify-center">
                        {/* map function convert movies array into each moive and display */}
                        {movies.map((movie) => (
                            // individual movie card
                            <div
                                className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[25vh] w-[150px] md:h-[30vh] md:w-[250px] bg-center bg-cover flex items-end rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 relative`}
                                onMouseEnter={() => setHover(movie.id)}
                                onMouseLeave={() => setHover("")}
                            >
                                {/* if mouse into card then display 😍/❌ in card */}
                                {/* short circuit evalution */}
                                {hover == movie.id && (
                                    <>
                                        {favourites.find(
                                            (m) => m.id == movie.id
                                        ) ? (
                                            // if moive is already in favourites array then display ❌
                                            <div
                                                className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer"
                                                onClick={() => del(movie)}
                                            >
                                                ❌
                                            </div>
                                        ) : (
                                            // if moive is not in favourites then display 😍
                                            <div
                                                className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer"
                                                onClick={() => add(movie)}
                                            >
                                                😍
                                            </div>
                                        )}
                                    </>
                                )}
                                {/* moive title div */}
                                <div className="w-full text-white text-center py-2 bg-gray-900 rounded-b-xl ">
                                    {movie.title}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* calling pagination components */}
            <Pagination pageProp={page} goBack={goBack} goAhead={goAhead} />
        </>
    );
}

export default Movies;

import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

function Favourites() {
    // genreid for tracking
    let genreids = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };
    const [curGenre, setCurGenre] = useState("All Genres"); // blue/grey button state
    const [favourites, setFavourites] = useState([]); // favourites movie array
    const [genres, setGenres] = useState([]); // to set genre form genreids and put in table
    const [rating, setRating] = useState(0); // to set rating and put in table
    const [popularity, setPopularity] = useState(0); // to set Popularity and put in table
    const [search, setSearch] = useState(""); // search state
    const [rows, setRows] = useState(5); // row state which inc/des depending on clicking on
    const [curPage, setCurPage] = useState(1); // current page / pagination

    // for getting movies
    useEffect(() => {
        let oldFav = localStorage.getItem("imdb");
        oldFav = JSON.parse(oldFav) || [];
        setFavourites(oldFav);
    }, []);

    //for genres get -> to build those blue/grey buttons
    useEffect(() => {
        let temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
        console.log(temp);
        temp = new Set(temp);
        setGenres(["All Genres", ...temp]);
    }, [favourites]);

    // del movie from favourite array
    let del = (movie) => {
        let newArray = favourites.filter((m) => m.id != movie.id);
        setFavourites([...newArray]);
        localStorage.setItem("imdb", JSON.stringify(newArray));
    };

    // filtered movies
    let filteredMovies = [];
    filteredMovies =
        curGenre == "All Genres"
            ? favourites
            : favourites.filter(
                  (movie) => genreids[movie.genre_ids[0]] == curGenre
              );

    // sorting
    if (rating == 1) {
        filteredMovies = filteredMovies.sort(function (objA, objB) {
            return objA.vote_average - objB.vote_average;
        });
    } else if (rating == -1) {
        filteredMovies = filteredMovies.sort(function (objA, objB) {
            return objB.vote_average - objA.vote_average;
        });
    }

    if (popularity == 1) {
        filteredMovies = filteredMovies.sort(function (objA, objB) {
            return objA.popularity - objB.popularity;
        });
    } else if (popularity == -1) {
        filteredMovies = filteredMovies.sort(function (objA, objB) {
            return objB.popularity - objA.popularity;
        });
    }

    //searching
    filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    // pagination
    let maxPage = Math.ceil(filteredMovies.length / rows);
    let si = (curPage - 1) * rows;
    let ei = Number(si) + Number(rows);

    filteredMovies = filteredMovies.slice(si, ei);

    let goBack = () => {
        if (curPage > 1) {
            setCurPage(curPage - 1);
        }
    };

    let goAhead = () => {
        if (curPage < maxPage) {
            setCurPage(curPage + 1);
        }
    };

    return (
        <>
            {/*  Genere button */}
            <div className="mt-4 px-2 flex justify-center flex-wrap space-x-2">
                {genres.map((genre) => (
                    <button
                        className={
                            curGenre == genre
                                ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                                : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
                        }
                        onClick={() => {
                            setCurPage(1);
                            setCurGenre(genre);
                        }}
                    >
                        {genre}
                    </button>
                ))}
            </div>
            {/* Search and row button */}
            <div className="text-center">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="border border-2 text-center p-1 m-2"
                />
                <input
                    type="number"
                    value={rows}
                    onChange={(e) => setRows(e.target.value)}
                    placeholder="Rows"
                    className="border border-2 text-center p-1 m-2"
                />
            </div>
            {/* TABLE */}
            <div className="flex flex-col m-4">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 min-w-full">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <div className="flex">
                                                <img
                                                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                                                    className="mr-2 cursor-pointer"
                                                    onClick={() => {
                                                        setPopularity(0);
                                                        setRating(-1);
                                                    }}
                                                />
                                                Rating
                                                <img
                                                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                                                    onClick={() => {
                                                        setPopularity(0);
                                                        setRating(1);
                                                    }}
                                                    className="ml-2 mr-2"
                                                />
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <div className="flex">
                                                <img
                                                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                                                    onClick={() => {
                                                        setRating(0);
                                                        setPopularity(-1);
                                                    }}
                                                    className="mr-2"
                                                />
                                                Popularity
                                                <img
                                                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                                                    className="ml-2 mr-2"
                                                    onClick={() => {
                                                        setRating(0);
                                                        setPopularity(1);
                                                    }}
                                                />
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Genre
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Remove
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredMovies.map((movie) => (
                                        <tr key={movie.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 md:h-[100px] md:w-[180px]">
                                                        <img
                                                            className="hidden md:block md:h-[100px] md:w-[180px]"
                                                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 font-bold">
                                                            {movie.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {movie.vote_average}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {movie.popularity}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {
                                                        genreids[
                                                            movie.genre_ids[0]
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                                <button
                                                    href="#"
                                                    className="text-red-600 hover:text-red-900"
                                                    onClick={() => del(movie)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                {/* Pagination component */}
                <Pagination
                    pageProp={curPage}
                    goBack={goBack}
                    goAhead={goAhead}
                />
            </div>
        </>
    );
}

export default Favourites;

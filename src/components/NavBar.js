import React, { useContext } from "react";
import Logo from "../navbar-logo.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="border pl-12 py-4 space-x-8 flex items-center dark:bg-gray-800 dark:border-gray-600">
                {/* navbar icon */}
                <img className="w-[30px] md:w-[50px]" src={Logo}></img>

                {/* link to movies page */}
                <Link
                    to="/"
                    className="text-blue-400 font-bold text-xl md:text-3xl dark:text-white"
                >
                    Movies
                </Link>

                {/* link to favourites page */}
                <Link
                    to="favourites"
                    className="text-blue-400 font-bold text-xl md:text-3xl dark:text-white"
                >
                    Favourites
                </Link>

                {/* dark mode toggle */}
                <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
                    {theme === "light" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </>
    );
}

export default NavBar;

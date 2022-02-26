import React from "react";
import Logo from "../navbar-logo.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="border pl-12 py-4 space-x-8 flex items-center">
                {/* navbar icon */}
                <img className="w-[30px] md:w-[50px]" src={Logo}></img>

                {/* link to movies page */}
                <Link
                    to="/"
                    className="text-blue-400 font-bold text-xl md:text-3xl"
                >
                    Movies
                </Link>

                {/* link to favourites page */}
                <Link
                    to="favourites"
                    className="text-blue-400 font-bold text-xl md:text-3xl"
                >
                    Favourites
                </Link>
            </div>
        </>
    );
}

export default NavBar;

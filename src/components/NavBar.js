import React from "react";
import Logo from "../navbar-logo.png";

function NavBar() {
    return (
        <>
            <div className="border pl-12 py-4 space-x-8 flex items-center">
                <img src={Logo}></img>
                <div className="text-blue-400 font-bold text-3xl">Movies</div>
                <div className="text-blue-400 font-bold text-3xl">
                    Favourites
                </div>
            </div>
        </>
    );
}

export default NavBar;

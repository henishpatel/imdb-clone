import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <Movies></Movies>
            <Pagination></Pagination>
        </>
    );
}

export default App;

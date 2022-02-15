import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";

function App() {
    return (
        <>
            {/* <h2>NavBar</h2> */}
            <NavBar></NavBar>
            <Banner></Banner>
            <Movies></Movies>
            {/* <h2>Banner</h2>
            <h2>Trending</h2>
            <h2>Pagination</h2> */}
        </>
    );
}

export default App;

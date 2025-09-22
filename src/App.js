import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Banner />
                                <Movies />
                            </>
                        }
                    ></Route>
                    <Route path="/favourites" element={<Favourites />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

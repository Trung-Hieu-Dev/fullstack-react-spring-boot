import React from "react";
import "./App.css";
import NavBar from "./layouts/NavbarAndFooter/NavBar";
import ExploreTopBooks from "./layouts/HomePage/ExploreTopBooks";
import Carousel from "./layouts/HomePage/Carousel";

function App() {
    return (
        <div>
            <NavBar/>
            <ExploreTopBooks/>
            <Carousel />
        </div>
    );
}

export default App;

import React from "react";
import "./App.css";
import NavBar from "./layouts/NavbarAndFooter/NavBar";
import Footer from "./layouts/NavbarAndFooter/Footer";
import HomePage from "./layouts/HomePage/HomePage";

function App() {
    return (
        <div>
            <NavBar/>
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;

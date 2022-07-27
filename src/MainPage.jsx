import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const MainPage = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Service />
            <About />
            <Contact />
            <Footer />

        </>
    );
}

export default MainPage;
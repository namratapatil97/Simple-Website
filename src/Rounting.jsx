import React from "react";
import MainPage from "./MainPage";
import Home from './pages/HomePage';
import Service from './pages/ServicePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import { Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<MainPage />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/service' element={<Service />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
    );
}

export default Routing;
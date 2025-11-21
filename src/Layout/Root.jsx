import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import Hero from '../Component/Hero';
import Slider from '../Component/Slider';
const Root = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Outlet/>
            <Slider/>
            <Footer/>
        </div>
    );
};

export default Root;
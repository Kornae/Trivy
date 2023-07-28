import React from "react";
import Navbar from "./Navbar";
import MainCard from './HomeCard';
import HomeCardContent from './HomeCardContent';
import Footer from './Footer';
import Carousel from "./Carousel";
import ControlledOpenSelect from "./SearchBar";
import HomeCardContent2 from './HomeCardContent2';

export default function Home() {
    return (
        <section id="first-section">
            <div className="grid-container-2">
                <Navbar />
                <MainCard />
                <div id="button-base" >
                    <ControlledOpenSelect />
                    <Carousel />
                </div>
                <HomeCardContent />
                <HomeCardContent2 />
                <Footer />
            </div>
        </section>
    )
}


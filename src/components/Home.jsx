import React from "react";
import ColorInversionFooter from "./Footer";
import Section1 from "./Section1";
import Nav from "./Nav";

export default function Home() {
    return (
        <div id="home">
            <div id="nav"> <Nav /></div>
            <div id="s1"><Section1 /></div>
            <div id="footer"><ColorInversionFooter /></div>
        </div>
    )
}


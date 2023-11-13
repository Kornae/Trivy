import React from "react";
import Carousel from "./Carousel";
import AutocompleteIntroduction from "./AutoComplete";

export default function Section1() {
    return (
        <div id="s1-container">
            <div id="box1">
                <div id="headings">
                    <div id="heading-text">
                        <h1 id="title"><span id="brand">Trivy</span></h1>
                        <p id="av-text">Mind-blowing. Head-turning.</p>
                        <div id="searchBar" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', padding: '5px' }}>
                            <AutocompleteIntroduction />
                        </div>
                    </div>
                </div>
            </div>
            <div id="showcase">
                <div id="carousel">
                    <Carousel />
                </div>
            </div>

        </div>
    )
}
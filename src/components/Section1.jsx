import React from "react";
import Carousel from "./Carousel";
import BasicAutocomplete from "./AutoComplete";

export default function Section1(props) {
    return (
        <div id="s1-container">

            <div id="box1">
                <div id="headings">

                    <div id="heading-text" >
                        <div id="title-image" style={{ padding: '0px', backgroundColor: '#ffffff' }}>
                            <span id="brand">TRIVY</span>
                        </div>
                        <p id="av-text">Mind-blowing. Head-turning.</p>
                        <div id="searchBar" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', padding: '5px' }}>
                            <BasicAutocomplete />
                        </div>
                    </div>
                </div>
            </div>
            <div id="showcase">
                <div id="carousel">
                    <Carousel
                        state={props.state}
                    />
                </div>
            </div>
        </div>
    )
}
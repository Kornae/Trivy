import React from "react";
import ColorInversionFooter from "./Footer";
import Section1 from "./Section1";
import Nav from "./Nav";

export default function Home(props) {
    return (
        <div id="home">
            <div id="nav"> <Nav change={props.change} check={props.check}/></div>
            <div id="s1"><Section1 
                state={true}
            /></div>
            <div id="footer"><ColorInversionFooter /></div>
        </div>
    )
}


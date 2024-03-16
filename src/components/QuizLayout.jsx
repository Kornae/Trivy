import React from "react";
import QuizTemplate from "./QuizTemplate";
import ColorInversionFooter from "./Footer";
import Nav2 from "./Nav2";

export default function QuizLayout(props) {
    return (
        <div id="quiz-layout" className="grid-container-3">
            <div id="nav2"><Nav2 /> </div>
            <div id="s2"><QuizTemplate 
                missed={props.missed}
            /></div>
            <div id="footer2"><ColorInversionFooter /></div>
        </div>
    )
}




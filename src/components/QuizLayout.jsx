import React from "react";
import QuizTemplate from "./QuizTemplate";
import Nav from "./Nav";
import ColorInversionFooter from "./Footer";

export default function QuizLayout() {
    return (
        <div id="quiz-layout" className="grid-container-3">
            <div id="nav2"><Nav /> </div>
            <div id="s2"><QuizTemplate /></div>
            <div id="footer2"><ColorInversionFooter /></div>
        </div>
    )
}




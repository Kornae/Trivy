import React from "react";
import QuizTemplate from "./QuizTemplate";
import Nav from "./Nav";
import ColorInversionFooter from "./Footer";

export default function QuizLayout() {
    return (
        <div id="quiz-layout" className="grid-container-3">
            <div id="nav"> <Nav /></div>
            <div id="quiz-card"> <QuizTemplate /></div>
            <div id="footer"><ColorInversionFooter /></div>
        </div>
    )
}


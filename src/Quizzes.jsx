import React from "react";
import QuizSection from "./components/QuizSection";
import Nav from "./components/Nav";
import ColorInversionFooter from "./components/Footer";

export default function Quizzes() {
    return (
        <div>
            <Nav />
            <QuizSection />
            <ColorInversionFooter />
        </div>
    )
}
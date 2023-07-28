import React from "react";
import Navbar from "./Navbar";
import QuizTemplate from "./QuizTemplate";
import Footer from "./Footer";

export default function QuizLayout() {
    return (
        <section id="first-section">
            <div className="grid-container-3">
                <Navbar />
                <QuizTemplate />
                <Footer />
            </div>
        </section>
    )
}


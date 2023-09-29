import React from "react";
import { Button } from "@mui/joy";
import GroupAvatars from "./Avatars";
import Carousel from "./Carousel";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Section1() {
    const scrollToCarousel = (e) => {
        e.preventDefault()
        const carouselSection = document.getElementById("carousel");

        if (carouselSection) {
            carouselSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div id="s1-container">

            <div id="box1">
                <div id="headings">
                    <div id="heading-text">
                        <h1 id="title">Elevate Your Knowledge with <span id="brand">Trivy.</span></h1>
                        <p id="subtitle">Empowering Minds & Cultivating Curiosity</p>
                        <Button id="exploreBtn" onClick={scrollToCarousel}  sx={{ color:'black'}}  variant="plain">Explore <KeyboardArrowDownIcon /></Button>
                    </div>
                </div>

                <div id="avatars">
                    <div id="avatar-text">
                        <p>18 Topics, Countless Quizzes</p>
                        <div id="avatar-group">
                            <GroupAvatars />
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
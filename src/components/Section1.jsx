import React from "react";
import GroupAvatars from "./Avatars";
import Carousel from "./Carousel";
import UnstyledSelectIntroduction from "./Select";
import SearchIcon from '@mui/icons-material/Search';

export default function Section1() {
    return (
        <div id="s1-container">
            <div id="box1">
                <div id="headings">
                    <div id="heading-text">
                        <h1 id="title">Elevate Your Knowledge with <span id="brand">Trivy.</span></h1>
                        <p id="subtitle">Empowering Minds & Cultivating Curiosity</p>
                        <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', padding: '5px' }}>
                            <UnstyledSelectIntroduction
                                search={<><SearchIcon fontSize="small" /> Search…</>}
                            />
                        </div>
                    </div>
                </div>
                <div id="avatars">
                    <div id="avatar-text">
                        <p id="av-text">18 Topics, Countless Quizzes</p>
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
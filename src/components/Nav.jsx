import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function Nav() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><span id="logo"><ModeCommentOutlinedIcon /> Trivy.</span></a>
                <Button color="inherit" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <ShortTextIcon />
                </Button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-auto">
                        <a className="nav-link nav-icons" href="/"><HomeRoundedIcon fontSize="small" /></a>
                        <a className="nav-link nav-icons" href="https://github.com/Kornae"><GitHubIcon fontSize="small" /></a>
                        <a className="nav-link nav-icons" href="https://www.linkedin.com/in/kornae-m-a69a3b125/"><LinkedInIcon fontSize="small" /></a>
                    </div>
                </div>


            </div>
        </nav>
    )
}
import React from "react";
import FilterListIcon from '@mui/icons-material/FilterList';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function Nav() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><span id="logo"><ChatBubbleOutlineIcon /> Trivy.</span></a>
                <Button color="inherit" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <FilterListIcon />
                </Button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-auto">
                        <a className="nav-link nav-icons" href="https://github.com/Kornae"><GitHubIcon fontSize="small" /></a>
                        <a className="nav-link nav-icons" href="https://www.linkedin.com/in/kornae-m-a69a3b125/"><LinkedInIcon fontSize="small" /></a>
                    </div>
                </div>


            </div>
        </nav>
    )
}
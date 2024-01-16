import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Nav() {
let home = () => {
    window.location = '/'
}

    let Instagram = () => {
        window.location = 'https://www.instagram.com/2kmer/?hl=en'
    }

    let GitHub = () => {
        window.location = 'https://github.com/Kornae?tab=repositories'
    }
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">
                <span onClick={home} className="navbar-brand brand" id="logo" href="#">TRIVY</span>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="navbar-brand brand" id="logo" href="#"><InstagramIcon onClick={Instagram}/> <GitHubIcon onClick={GitHub}/></span>
                        </div>

        </nav>
    )
}
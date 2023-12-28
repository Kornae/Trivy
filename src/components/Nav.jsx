import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Nav() {
let home = () => {
    window.location = '/'
}
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">
                <span onClick={home} className="navbar-brand brand" id="logo" href="#">TRIVY</span>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="navbar-brand brand" id="logo" href="#"><InstagramIcon /> <LinkedInIcon /></span>
                        </div>

        </nav>
    )
}
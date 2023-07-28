import React from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TemporaryDrawer from "./Drawer";


function Navbar() {
    return (
        <div id="nav-box">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <a className="navbar-brand" style={{ paddingLeft: '10px' }} href="/"> <ChatBubbleOutlineIcon /> Trivy</a>

                    <div
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{border:'none'}}
                    >
                        <span > <TemporaryDrawer /></span>
                    </div>
                    
            
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

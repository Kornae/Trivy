import React from "react";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BlurOnIcon from '@mui/icons-material/BlurOn';

export default function Nav(props) {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container" style={{ padding: '0px 15px' }}>
                <span className="navbar-brand brand" id="logo"><span><ChatBubbleIcon sx={{ padding: '5px' }} /></span> TRIVY</span>
                <span className="nav-item brand" id=""><BlurOnIcon color='inherit' fontSize='small' /> v10</span>
            </div>
        </nav>
    )
}

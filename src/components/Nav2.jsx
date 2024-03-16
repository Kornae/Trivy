import React from "react";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AlertDialogModal from "./Return";

export default function Nav2() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container" style={{ padding: 0 }}>
                <span className="navbar-brand brand" id="logo"><span><ChatBubbleIcon sx={{ padding: '5px' }} /></span> TRIVY</span>
                <span className="nav-item" id=""><AlertDialogModal /></span>
            </div>
        </nav>
    )
}

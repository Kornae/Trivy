import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function MainCard() {

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div id="main-box" className="card">
            <div id="main-content" className="container">
                <div className="main-heading-div">
                
                    <h5 id="main-h5">{months[month]} {day}</h5>
                    
                    <Button style={{ padding: '0px' }}> <h1 id="main-h1">  Trivy  <ArrowForwardIosIcon /> </h1></Button>
                   <p> Empowering Minds & Cultivating Curiosity</p>
    
           </div>
              
            </div>
        </div>
    )
}

export default MainCard;
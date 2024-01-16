import React from "react";
import ProgressBar from "./ProgressBar";
import Avatar from '@mui/joy/Avatar';
import { Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
import CircularDeterminate from "./Circle";

export default function PostQuiz(props) {
    return (
        <div id="quiz-box" className="card">
            <div id="main-content" className="container">
                <div id="results" className="main-heading-div">

                    <div id="logo-div">
         <h3 id="quiz-h5">{props.title}</h3>
                     <div id="avatar-group" style={{ padding: '15px' }}> <Avatar id="avatar-logo" size="lg" variant="solid" src={props.image} /> <CircularDeterminate progress={100} /></div>
                        <div id="progress">
                            <ProgressBar value={props.totalScore} max={100} width={'25rem'} className="custom-progress-bar" />
                            <span id="total" style={{ fontSize: '4rem' }}> {props.totalScore} </span>

                        </div>

                        <h3 style={{ padding: '20px', color: '#424242' }} className="message" id="quiz-h5">{props.message}</h3>
                            <Button id="retryBtn" onClick={props.retry} style={{ padding: '20px', width: '15%', fontWeight: '300', borderRadius: '10px', margin:'5px' }} variant="soft" color="neutral"><RestartAltIcon /> <span style={{padding:'0px 5px'}}>Retry</span></Button>
                            <Button id="doneBtn" onClick={props.returnHome} style={{ padding: '20px', width: '15%', fontWeight: '300', borderRadius: '10px', margin:'5px' }} variant="soft" color="neutral"><RoofingRoundedIcon /> <span style={{padding:'0px 5px'}}>Home</span></Button>
                    </div>


                </div>

            </div>
        </div>
    )
}
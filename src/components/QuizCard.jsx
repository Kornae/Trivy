import React from "react";
import Avatar from '@mui/joy/Avatar';
import CircularDeterminate from "./Circle";

export default function QuizCard(props) {
    return (
        <div id="quiz-box" style={{ height: '100%' }}>
            <div id="main-content" className="container">
                <div id="questions" className="main-heading-div">
                    <div id="logo-div">
                        <div id="avatar-group" style={{ padding: '15px' }}> <Avatar id="avatar-logo" size="lg" variant="solid" src={props.image} /> <CircularDeterminate progress={props.count * 10} /></div>
                        <h3 id="quiz-h5" style={{ paddingTop: '15px' }}>{props.title}</h3>
                        <h6 id="quiz-h5">{props.category}</h6>
                    </div>
                    <div id="h1-div">
                        <h1 id="quiz-h1" className="quiz-question" >{decodeURIComponent(props.quizQuestion)} </h1>
                    </div>
                    <div id="question-div" className="container-fluid">
                        <div className={`answer1 answerBorder ${props.isSelect ? null : `a1`} ${props.btnValue === props.qA1 && props.isIncorrect ? `incorrectAnswer` : null} ${props.btnValue === props.qA1 && props.isCorrect ? `correctAnswer` : null} ${props.btnValue === props.correctAnswer && props.isSelect && !props.isIncorrect && props.isCorrect ? `notSelectedAnswer` : null} ${props.btnValue !== props.correctAnswer && props.isSelect && props.isIncorrect && !props.isCorrect ? `notSelectedAnswer` : null}`} style={props.buttonStyle1} onKeyDown={props.handleKeyDown} onClick={props.handleChoiceSelection} variant="soft" id={props.qA1}>{props.qA1} </div>
                        <div className={`answer2 answerBorder ${props.isSelect ? null : `a2`} ${props.btnValue === props.qA2 && props.isIncorrect ? `incorrectAnswer` : null} ${props.btnValue === props.qA2 && props.isCorrect ? `correctAnswer` : null} ${props.btnValue === props.correctAnswer && props.isSelect && !props.isIncorrect && props.isCorrect ? `notSelectedAnswer` : null} ${props.btnValue !== props.correctAnswer && props.isSelect && props.isIncorrect && !props.isCorrect ? `notSelectedAnswer` : null}`} style={props.buttonStyle2} onKeyDown={props.handleKeyDown} onClick={props.handleChoiceSelection} variant="soft" id={props.qA2}>{props.qA2} </div>
                        <div className={`answer3 answerBorder ${props.isSelect ? null : `a3`} ${props.btnValue === props.qA3 && props.isIncorrect ? `incorrectAnswer` : null} ${props.btnValue === props.qA3 && props.isCorrect ? `correctAnswer` : null} ${props.btnValue === props.correctAnswer && props.isSelect && !props.isIncorrect && props.isCorrect ? `notSelectedAnswer` : null} ${props.btnValue !== props.correctAnswer && props.isSelect && props.isIncorrect && !props.isCorrect ? `notSelectedAnswer` : null}`} style={props.buttonStyle3} onKeyDown={props.handleKeyDown} onClick={props.handleChoiceSelection} variant="soft" id={props.qA3}>{props.qA3} </div>
                        <div className={`answer4 answerBorder ${props.isSelect ? null : `a4`} ${props.btnValue === props.qA4 && props.isIncorrect ? `incorrectAnswer` : null} ${props.btnValue === props.qA4 && props.isCorrect ? `correctAnswer` : null} ${props.btnValue === props.correctAnswer && props.isSelect && !props.isIncorrect && props.isCorrect ? `notSelectedAnswer` : null} ${props.btnValue !== props.correctAnswer && props.isSelect && props.isIncorrect && !props.isCorrect ? `notSelectedAnswer` : null}`} style={props.buttonStyle4} onKeyDown={props.handleKeyDown} onClick={props.handleChoiceSelection} variant="soft" id={props.qA4}>{props.qA4} </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
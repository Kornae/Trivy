import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import entertainment from "./Entertainment";
import { useLoaderData } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProgressBar from "./ProgressBar";

export const dataLoader = async () => {
    const path = window.location.search;
    const index = entertainment.findIndex((item) => item.title === path.slice(1) || item.alt === path.slice(1));
    let api = entertainment[index].api;

    const res = await fetch(api);
    const quizData = await res.json()

    return quizData.results;

}

function QuizTemplate() {

    useLoaderData().push({
        "category": null,
        "type": null,
        "difficulty": null,
        "question": null,
        "correct_answer": null,
        "incorrect_answers": [
            null,
            null,
            null
        ]
    })

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [quest, setQuest] = useState(1);
    const [btnValue, setBtnValue] = useState(null);
    const [isSelect, setIsSelect] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const [isIncorrect, setIsIncorrect] = useState(false);
    const [questionArray, setQuestionArray] = useState([]);
    const loaderData = useLoaderData();

    const question = useLoaderData()[count].question

    const path = window.location.search;
    const index = entertainment.findIndex((item) => item.title === path.slice(1) || item.alt === path.slice(1));

    let title = entertainment[index].title;

    const logo = entertainment[index].logo;

    useEffect(() => {
        const shuffledArray = [...loaderData[count].incorrect_answers, loaderData[count].correct_answer].sort(() => Math.random() - 0.5);
        setQuestionArray(shuffledArray);
    }, [count, loaderData]);

    let correctAnswer = decodeURIComponent(useLoaderData()[count].correct_answer)

    let handeleClick = (e) => {
        setQuest(quest + 1)
        setCount(count + 1)
        setIsCorrect(false)
        setIsIncorrect(false)
        setIsSelect(false)
    }

    let handleChoiceSelection = (e) => {
        setIsSelect(true)
        let yourAnswer = e.target.id;
        setBtnValue(yourAnswer)

        if (yourAnswer === correctAnswer) {
            setScore(score + 1)
            setIsCorrect(true)
        } else {
            setIsIncorrect(true)
        }
    }


    let returnHome = () => {
        window.location = '/'
    }


    const totalScore = (score * 10)
    let message = '';


    if (totalScore === 100) {
        message = "Congratulations! You achieved a perfect score! You're a 'Trivy' genius!";
    }
    else if (totalScore >= 90) {
        message = "Wow, impressive! You're a 'Trivy' master!";
    } else if (totalScore >= 80) {
        message = `Great job! You have a solid understanding of ${title}.`;
    } else if (totalScore >= 70) {
        message = "Well done! You're on the right track.";
    } else if (totalScore >= 60) {
        message = "Good effort! Keep learning and practicing.";
    } else if (totalScore >= 50) {
        message = "Not bad! You're making progress.";
    } else {
        message = "Keep going! Every attempt counts.";
    }




    const buttonStyle1 = {
        padding: '30px',
        fontSize: '1em',
        pointerEvents: isSelect ? 'none' : 'auto',
        backgroundColor:
            btnValue === decodeURIComponent(questionArray[0])
                ? isIncorrect
                    ? '#f4eff1'
                    : isCorrect
                        ? '#edf2f1'
                        : null
                : null,
        color:
            btnValue === decodeURIComponent(questionArray[0])
                ? isIncorrect
                    ? '#d3302f'
                    : isCorrect
                        ? '#39833b'
                        : null
                : null
    };

    const buttonStyle2 = {
        padding: '30px',
        fontSize: '1em',
        pointerEvents: isSelect ? 'none' : 'auto',
        backgroundColor:
            btnValue === decodeURIComponent(questionArray[1])
                ? isIncorrect
                    ? '#f4eff1'
                    : isCorrect
                        ? '#edf2f1'
                        : null
                : null,
        color:
            btnValue === decodeURIComponent(questionArray[1])
                ? isIncorrect
                    ? '#d3302f'
                    : isCorrect
                        ? '#39833b'
                        : null
                : null
    };

    const buttonStyle3 = {
        padding: '30px',
        fontSize: '1em',
        pointerEvents: isSelect ? 'none' : 'auto',
        backgroundColor:
            btnValue === decodeURIComponent(questionArray[2])
                ? isIncorrect
                    ? '#f4eff1'
                    : isCorrect
                        ? '#edf2f1'
                        : null
                : null,

        color:
            btnValue === decodeURIComponent(questionArray[2])
                ? isIncorrect
                    ? '#d3302f'
                    : isCorrect
                        ? '#39833b'
                        : null
                : null
    };

    const buttonStyle4 = {
        padding: '30px',
        fontSize: '1em',
        pointerEvents: isSelect ? 'none' : 'auto',
        backgroundColor:
            btnValue === decodeURIComponent(questionArray[3])
                ? isIncorrect
                    ? '#f4eff1'
                    : isCorrect
                        ? '#edf2f1'
                        : null
                : null,
        color:
            btnValue === decodeURIComponent(questionArray[3])
                ? isIncorrect
                    ? '#d3302f'
                    : isCorrect
                        ? '#39833b'
                        : null
                : null
    };

    if (count < 10) {

        return (
            <div id="quiz-box">
                <div id="main-content" className="container">
                    <div id="questions" className="main-heading-div">
                        <div id="logo-div">
                            <h1 id="quiz-h5">{logo}</h1>
                            <h4 id="quiz-h5">{title}</h4>
                            <h6 style={{ padding: '10px', color: '#929494' }} id="quiz-h5">Score: {score}</h6>
                        </div>

                        <div id="h1-div">
                            <h1 id="quiz-h1"> {decodeURIComponent(question)} </h1>
                        </div>
                        <Button style={buttonStyle1} onClick={handleChoiceSelection} color="inherit" id={decodeURIComponent(questionArray[0])}>{decodeURIComponent(questionArray[0])} </Button>
                        <Button style={buttonStyle2} onClick={handleChoiceSelection} color="inherit" id={decodeURIComponent(questionArray[1])}>{decodeURIComponent(questionArray[1])} </Button>
                        <Button style={buttonStyle3} onClick={handleChoiceSelection} color="inherit" id={decodeURIComponent(questionArray[2])}>{decodeURIComponent(questionArray[2])} </Button>
                        <Button style={buttonStyle4} onClick={handleChoiceSelection} color="inherit" id={decodeURIComponent(questionArray[3])}>{decodeURIComponent(questionArray[3])} </Button>

                        <div id="next-button">

                            {isSelect ? (<Button onClick={handeleClick} style={{ padding: '20px 100px', width: '100%' }} color="inherit">Next <NavigateNextIcon /></Button>) : null}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div id="quiz-box" className="card">
                <div id="main-content" className="container">
                    <div id="questions" className="main-heading-div">

                        <div id="logo-div">

                            <h1 id="quiz-h5">{logo}</h1>

                            <h3 id="quiz-h5">{title}</h3>

                            <div id="progress">
                                <ProgressBar value={totalScore} max={100} width={'25rem'} className="custom-progress-bar" />
                                <span id="total" style={{ fontSize: '4rem' }}> {totalScore} </span>

                            </div>

                            <h3 style={{ padding: '20px' }} id="quiz-h5">{message}</h3>
                            <Button onClick={returnHome} style={{ padding: '10px', width: '100%' }} color="inherit">Done</Button>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default QuizTemplate;
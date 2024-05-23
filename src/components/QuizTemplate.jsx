import React, { useState, useEffect } from "react";
import entertainment from "./Entertainment";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";
import PostQuiz from "./PostQuiz";

export const dataLoader = async () => {
    const path = window.location.search;
    const index = entertainment.findIndex((item) => item.title === path.slice(1) || item.alt === path.slice(1));
    let api = entertainment[index].api;
    const res = await fetch(api);
    const quizData = await res.json();
    return quizData.results;
}

function QuizTemplate(props) {
    const loaderData = useLoaderData();
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [missed, setMissed] = useState(0);
    const [quizQuestion, setQuizQuestion] = useState('')
    const [btnValue, setBtnValue] = useState(null);
    const [isSelect, setIsSelect] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [questionArray, setQuestionArray] = useState([]);
    const [num, setNum] = useState([])

    const path = window.location.search;
    const index = entertainment.findIndex((item) => item.title === path.slice(1) || item.alt === path.slice(1));
    let title = entertainment[index].title;
    const image = entertainment[index].img;
    const category = entertainment[index].category;

    useEffect(() => {
        if (loaderData.length > count && loaderData[count]) {
            console.log(count)
            console.log(loaderData[0])
            const questions = loaderData[count].question;
            const shuffledArray = [...loaderData[count].incorrect_answers, loaderData[count].correct_answer].sort(() => Math.random() - 0.5);
            setQuestionArray(shuffledArray);
            setQuizQuestion(questions);
        }
    }, [count, loaderData]);

    let correctAnswer = '';
    if (loaderData.length > count && loaderData[count]) {
        correctAnswer = decodeURIComponent(loaderData[count].correct_answer);
    }

    let qA1 = '';
    let qA2 = '';
    let qA3 = '';
    let qA4 = '';
    if (questionArray.length === 4) {
        qA1 = decodeURIComponent(questionArray[0]);
        qA2 = decodeURIComponent(questionArray[1]);
        qA3 = decodeURIComponent(questionArray[2]);
        qA4 = decodeURIComponent(questionArray[3]);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
            event.preventDefault();
        }
    };
    let handleChoiceSelection = (e) => {
        setIsSelect(true)
        let yourAnswer = e.target.id;
        setBtnValue(yourAnswer)

        if (yourAnswer === correctAnswer) {
            setScore(score + 1)
            setIsCorrect(true)

        } else {
            setIsIncorrect(true)
            setMissed(missed + 1)
        }

        setTimeout(function () {
            setCount(count + 1)
            setNum(prevNum => [...prevNum, count]);
            setIsCorrect(false)
            setIsIncorrect(false)
            setIsSelect(false)
        }, 1000);
    }
    console.log(num)
    let returnHome = () => {
        window.location = '/'
    }

    let retry = () => {
        window.location.reload();
    }

    const totalScore = (score * 10)
    let message = totalScore === 100 ? "Perfection!" : totalScore >= 90 ? "Outstanding!" : totalScore >= 80 ? `Impressive!` : totalScore >= 70 ? "Well done!" : totalScore >= 60 ? "Good effort!" : totalScore >= 50 ? "Making progress!" : "Potential for Improvement.";

    const baseButtonStyle = {
        margin: '5px',
        padding: '30px',
        fontSize: '1.1em',
        fontWeight: '500',
        borderRadius: '0px',
        pointerEvents: isSelect ? 'none' : 'auto',
        fontFamily: 'Montserrat',
    };

    const buttonStyle1 = {
        ...baseButtonStyle
    };

    const buttonStyle2 = {
        ...baseButtonStyle
    };

    const buttonStyle3 = {
        ...baseButtonStyle
    };

    const buttonStyle4 = {
        ...baseButtonStyle
    };

    if (count < 10) {
        return (
            <QuizCard
                buttonStyle1={buttonStyle1}
                buttonStyle2={buttonStyle2}
                buttonStyle3={buttonStyle3}
                buttonStyle4={buttonStyle4}
                btnValue={btnValue}
                category={category}
                correctAnswer={correctAnswer}
                count={count}
                handleChoiceSelection={handleChoiceSelection}
                handleKeyDown={handleKeyDown}
                image={image}
                isCorrect={isCorrect}
                isIncorrect={isIncorrect}
                isSelect={isSelect}
                qA1={qA1}
                qA2={qA2}
                qA3={qA3}
                qA4={qA4}
                quizQuestion={quizQuestion}
                title={title}
            />
        )
    }
    else {
        return (
            <div>
                <PostQuiz
                    category={category}
                    image={image}
                    message={message}
                    title={title}
                    totalScore={totalScore}
                    returnHome={returnHome}
                    retry={retry}
                    correct={score}
                    incorrect={missed}
                    totalQuestions={count}
                />
            </div>

        )
    }
}

export default QuizTemplate;
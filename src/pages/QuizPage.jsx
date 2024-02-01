/* eslint-disable react/prop-types */
import QuestionCard from "@/components/ui/QuestionCard"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { decode } from 'html-entities'
import { nanoid } from "nanoid"

function QuizPage({ questionsNumber, difficulty, homeScreen }) {
    const [questions, setQuestions] = useState([])
    const [reveal, setReveal] = useState(false)
    const [startPlay, setStartPlay] = useState(false)

    useEffect(() => {
        //console.log("Api called")

        fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&category=18&type=multiple${difficulty != "any" ? "&difficulty=" + difficulty : ""}`)
            .then(resp => resp.json())
            .then(data => {
                if (data["response_code"] === 0) {
                    const myquestions = transformQuestionResponse(data)
                    setQuestions(myquestions)
                }
            })
            .catch((err) => console.log(err))


        return () => {
            setStartPlay(false)
        };
    }, [startPlay])

    const shuffleArray = (array) => {
        return array.slice().sort(() => Math.random() - 0.5);
    }

    function transformQuestionResponse(apiResult) {
        const apiQuestions = apiResult["results"]
        const questionsAnswers = apiQuestions.map(
            (questionObj) => {
                return {
                    question: decode(questionObj.question),
                    questionId: nanoid(),
                    answers: shuffleArray([...questionObj.incorrect_answers.map(
                        (incorrectAnswer) => {
                            return {
                                text: decode(incorrectAnswer),
                                correct: false
                            }
                        }
                    ), {
                        text: decode(questionObj.correct_answer),
                        correct: true
                    }]),
                    score: 0
                }
            }
        )
        return questionsAnswers
    }

    function checkAnswers() {
        //console.log("Reveal Score")
        setReveal(!reveal)
    }
    function playAgain() {
        //console.log("Play Again")
        setReveal(!reveal)
        setStartPlay(true)
    }

    function updateScore(questionIndex, answerIndex) {
        setQuestions((questions) => {
            return questions.map(
                (questionObj, index) => {
                    if (index === questionIndex) {
                        return {
                            ...questionObj,
                            score: questions[questionIndex].answers[answerIndex].correct ? 1 : 0
                        }
                    } else {
                        return questionObj
                    }
                }
            )
        })
    }

    return (
        <div className="quiz-page">
            {!startPlay &&
                questions.map((questionObj, index) => {
                    return <QuestionCard key={questionObj.questionId} reveal={reveal} questionIndex={index} questionText={questionObj.question} answers={questionObj.answers} handleClick={updateScore} />
                })
            }
            <div className="score">
                {reveal && <p>You scored {questions.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0)}/{questions.length} correct answers </p>}
                {reveal ?
                    <Button variant="" onClick={playAgain} >Play again</Button> :
                    <Button variant="" onClick={checkAnswers} >Check answers</Button>}
                <Button variant="outline" onClick={() => homeScreen(false)}><i className="fa-solid fa-house"></i></Button>
            </div>
        </div>
    )
}

export default QuizPage
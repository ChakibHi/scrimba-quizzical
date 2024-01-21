/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Button } from "./button"
import { nanoid } from 'nanoid'

/* eslint-disable react/prop-types */
function QuestionCard({ questionText, correctAnswer, incorrectAnswers }) {

    // Randomize
    const answers = [...incorrectAnswers, correctAnswer]
    const [answersState, setAnswersState] = useState([])
    useEffect(
        () => {
            for (const answer of answers) {
                setAnswersState((prevState) => {
                    return [
                        ...prevState,
                        {
                            id: nanoid(),
                            text: answer,
                            selected: false,
                            variantType: "outline"
                        }
                    ]

                })
            }
        }
        , [])

    console.log(answersState)
    function checkAnswer(answer) {
        if (answer === correctAnswer) {
            console.log("Correct answer selected!")
        }
    }
    // let variantType = "outline"
    function handleSubmit(id) {
        setAnswersState((prevState) => prevState.map(
            (answerObj) => {
                return answerObj.id === id ? { ...answerObj, variantType: switchVariantType(answerObj.variantType) } : answerObj
            })
        )
        // variantType = ""
        console.log("clicked")
    }
    function switchVariantType(currentType) {
        return currentType === "" ? "outline" : ""
    }
    return (
        <div className="quesiton-card">
            <p>{questionText}</p>
            <div className="answers">
                {answersState.map((answer) => {
                    return <Button key={answer.id} variant={answer.variantType} onClick={() => handleSubmit(answer.id)}>{answer.text}</Button>
                })}
            </div>
        </div>
    )
}

export default QuestionCard
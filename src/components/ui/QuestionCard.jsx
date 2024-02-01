/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Button } from "./button"

/* eslint-disable react/prop-types */
function QuestionCard({ reveal, questionIndex, questionText, answers, handleClick }) {
    const [answersState, setAnswersState] = useState(answers.map(
        (answer) => {
            return {
                ...answer,
                selected: false,
                className: ""
            }
        }
    ))
    function handleSubmit(id) {
        handleClick(questionIndex, id)
        setAnswersState((answers) => {
            return answers.map(
                (answer, index) => {
                    if (index === id) {
                        return {
                            ...answer,
                            selected: true
                        }
                    } else {
                        return {
                            ...answer,
                            selected: false
                        }
                    }
                }
            )
        })
    }

    useEffect(() => {
        if (reveal) {
            setAnswersState((answers) => {
                return answers.map(
                    (answer) => {
                        if (answer.selected && answer.correct) {
                            return {
                                ...answer,
                                className: "reveal-answer correct-answer"
                            }
                        } else if (answer.selected && !answer.correct) {
                            return {
                                ...answer,
                                className: "reveal-answer wrong-answer"
                            }
                        } else if (!answer.selected && answer.correct) {
                            return {
                                ...answer,
                                className: "reveal-answer correct-answer"
                            }
                        } else {
                            return {
                                ...answer,
                                className: "reveal-answer"
                            }
                        }
                    }
                )
            })
        }
    }, [reveal])

    return (
        <div className="question-card">
            <p>{questionText}</p>
            <div className="answers">
                {answersState.map((answer, index) => {
                    return <Button key={"a-" + index} className={answer.className} variant={answer.selected ? "" : "outline"} onClick={() => handleSubmit(index)}>{answer.text}</Button>
                })}
            </div>
        </div>
    )
}

export default QuestionCard

/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"

function HomePage({ startButton, questionsNumber, setQuestionsNumber, difficulty, setDifficulty }) {

    function updateQuestionsNumber(action) {
        setQuestionsNumber((prevNumber) => {
            if (action === "sub" && questionsNumber > 1) {
                return prevNumber - 1
            } else if (action === "add" && questionsNumber < 8) {
                return prevNumber + 1
            } else {
                return prevNumber
            }
        })
    }

    function updateDifficulty(difficulty) {
        setDifficulty(difficulty)
    }

    return (
        <div className="home-page">
            <h1>Quizzical</h1>
            <h3>by Hicham</h3>
            <h4>Number of questions:</h4>
            <div className="questions-number">
                <Button variant="outline" onClick={() => updateQuestionsNumber("sub")}>-</Button>
                <span>{questionsNumber}</span>
                <Button variant="outline" onClick={() => updateQuestionsNumber("add")}>+</Button>
            </div>
            <h4>Difficulty:</h4>
            <div className="difficulty">
                <Button variant={difficulty === "any" ? "" : "outline"} onClick={() => updateDifficulty("any")}>Any</Button>
                <Button variant={difficulty === "easy" ? "" : "outline"} onClick={() => updateDifficulty("easy")}>Easy</Button>
                <Button variant={difficulty === "medium" ? "" : "outline"} onClick={() => updateDifficulty("medium")}>Medium</Button>
                <Button variant={difficulty === "hard" ? "" : "outline"} onClick={() => updateDifficulty("hard")}>Hard</Button>
            </div>
            <Button className="start-btn" variant="" onClick={startButton}><i className="fa-solid fa-dice fa-bounce" style={{ backgroundColor: "transparent" }}></i>&nbsp; Start Quiz</Button>
        </div>
    )
}

export default HomePage
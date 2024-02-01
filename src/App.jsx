import { useState } from 'react'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'


function App() {
  const [startMode, setStartMode] = useState(false)
  const [questionsNumber, setQuestionsNumber] = useState(4)
  const [difficulty, setDifficulty] = useState("any")

  function handlePlay() {
    // console.log("clicked")
    setStartMode(true)
  }

  return (
    <main>
      {!startMode && <HomePage startButton={handlePlay} questionsNumber={questionsNumber} setQuestionsNumber={setQuestionsNumber} difficulty={difficulty} setDifficulty={setDifficulty} />}
      {startMode && <QuizPage questionsNumber={questionsNumber} difficulty={difficulty} homeScreen={setStartMode} />}
    </main>
  )
}

export default App


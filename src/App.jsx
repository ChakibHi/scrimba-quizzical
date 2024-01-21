import { useState } from 'react'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'


function App() {
  const [startMode, setStartMode] = useState(false)

  function handlePlay() {
    // console.log("clicked")
    setStartMode(true)
  }

  return (
    <main>
      <HomePage startButton={handlePlay} />
      <QuizPage />
    </main>
  )
}

export default App


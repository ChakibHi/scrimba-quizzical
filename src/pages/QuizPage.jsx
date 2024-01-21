import QuestionCard from "@/components/ui/QuestionCard"

function QuizPage() {
    const { question, correct_answer, incorrect_answers } = {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Science: Computers",
        "question": "Which of these is not a key value of Agile software development?",
        "correct_answer": "Comprehensive documentation",
        "incorrect_answers": [
            "Individuals and interactions",
            "Customer collaboration",
            "Responding to change"
        ]
    }
    return (
        <div className="quiz-page">
            <QuestionCard questionText={question} correctAnswer={correct_answer} incorrectAnswers={incorrect_answers} />
            {/* <QuestionCard questionText={question} correctAnswer={correct_answer} incorrectAnswers={incorrect_answers} /> */}
        </div>
    )
}

export default QuizPage

/*
API endpoint: https://opentdb.com/api.php?amount=5&category=18&type=multiple
Resp:
{
    "response_code": 0,
    "results": [
        {
            "type": "multiple",
            "difficulty": "hard",
            "category": "Science: Computers",
            "question": "Which of these is not a key value of Agile software development?",
            "correct_answer": "Comprehensive documentation",
            "incorrect_answers": [
                "Individuals and interactions",
                "Customer collaboration",
                "Responding to change"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "In web design, what does CSS stand for?",
            "correct_answer": "Cascading Style Sheet",
            "incorrect_answers": [
                "Counter Strike: Source",
                "Corrective Style Sheet",
                "Computer Style Sheet"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "hard",
            "category": "Science: Computers",
            "question": "Which of the following is the oldest of these computers by release date?",
            "correct_answer": "TRS-80",
            "incorrect_answers": [
                "Commodore 64",
                "ZX Spectrum",
                "Apple 3"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
            "correct_answer": "Apple",
            "incorrect_answers": [
                "Microsoft",
                "Atari",
                "Commodore"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Science: Computers",
            "question": "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
            "correct_answer": "Heat Sink",
            "incorrect_answers": [
                "CPU Vent",
                "Temperature Decipator",
                "Heat Vent"
            ]
        }
    ]
}
*/
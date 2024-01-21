import { Button } from "@/components/ui/button"

function HomePage({ startButton }) {
    return (
        <div className="home-page">
            <h1>Quizzical</h1>
            <h5>by Hicham</h5>
            <Button variant="outline" onClick={startButton}>Button</Button>
        </div>
    )
}

export default HomePage
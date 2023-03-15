import { useState } from "react";

interface AmRobotProps {
    sumAnswer: number;
    onSumAnswer: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmRobot: React.FC<AmRobotProps> = ({ sumAnswer, onSumAnswer }) => {
    const [error, setError] = useState("");

    const validateAnswer = (answer: number) => {
        if (answer !== 4) {
            setError("Incorrect answer. You may be a robot! Please try again");
        } else {
            setError("");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const answer = parseInt(e.target.value);
        onSumAnswer(e);
        validateAnswer(answer);
    };

    return (
        <>
            <label htmlFor="am-robot">What is 2+2?: </label>
            <input type="number" id="am-robot" value={sumAnswer} onChange={handleInputChange} />
            <br />
            {error && <div style={{ color: "red" }}>{error}</div>}
        </>
    );
}

export default AmRobot;
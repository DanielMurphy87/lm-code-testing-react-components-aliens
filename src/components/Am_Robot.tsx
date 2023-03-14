interface AmRobotProps {
    sumAnswer: number;
    onSumAnswer: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmRobot : React.FC<AmRobotProps> = ({ sumAnswer, onSumAnswer }) => {

    return (
        <>
            <label htmlFor="am-robot">What is 2+2?: </label>
            <input type="number" id="am-robot" value={sumAnswer} onChange={onSumAnswer} />
            <br />
        </>
    );
}

export default AmRobot;
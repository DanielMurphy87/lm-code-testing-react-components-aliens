import { ReactElement, useState } from 'react';


interface AmRobotProps {
    name: string;
}

const AmRobot = (props: AmRobotProps): ReactElement => {
    const [amRobot, setAmRobot] = useState('');

    return (
        <>
            <label htmlFor="am-robot">What is 2+2?: </label>
            <input type="text" id="am-robot" value={amRobot} />
            <br />
        </>
    );
}

export default AmRobot;
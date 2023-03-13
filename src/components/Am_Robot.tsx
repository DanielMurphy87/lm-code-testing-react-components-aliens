import React from 'react';

interface AmRobotProps {
    name: string;
}

function AmRobot(props: AmRobotProps) {
    const [amRobot, setAmRobot] = React.useState('');

    return (
        <>
            <label htmlFor="am-robot">What is 2+2?: </label>
            <input type="text" id="am-robot" value={amRobot} />
        </>
    );
}

export default AmRobot;
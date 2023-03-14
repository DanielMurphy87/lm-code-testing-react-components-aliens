import { ReactElement, useState } from 'react';

interface PlanetNameProps {
    name: string;
}

const PlanetName = (props: PlanetNameProps): ReactElement => {
    const [planetName, setPlanetName] = useState('');

    return (
        <>
            <label htmlFor="planet-name">Planet Name: </label>
            <input type="text" id="planet-name" value={planetName} />
            <br />
        </>
    );
}

export default PlanetName;
import React from 'react';

interface PlanetNameProps {
    name: string;
}

function PlanetName(props: PlanetNameProps) {
    const [planetName, setPlanetName] = React.useState('');

    return (
        <>
            <label htmlFor="planet-name">Planet Name: </label>
            <input type="text" id="planet-name" value={planetName} />
        </>
    );
}

export default PlanetName;
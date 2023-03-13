import React from 'react';

interface SpeciesNameProps {
    name: string;
}

function SpeciesName(props: SpeciesNameProps) {
    const [speciesName, setSpeciesName] = React.useState('');

    return (
        <>
            <label htmlFor="species-name">Species Name: </label>
            <input type="text" id="species-name" value={speciesName} />
        </>
    );
}

export default SpeciesName;
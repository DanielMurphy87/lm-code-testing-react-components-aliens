import { ReactElement, useState } from 'react';

interface SpeciesNameProps {
    name: string;
}

const SpeciesName = (props: SpeciesNameProps): ReactElement => {
    const [speciesName, setSpeciesName] = useState('');

    return (
        <>
            <label htmlFor="species-name">Species Name: </label>
            <input type="text" id="species-name" value={speciesName} />
            <br />
        </>
    );
}

export default SpeciesName;
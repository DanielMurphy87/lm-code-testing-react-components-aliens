import { ReactElement, useState } from 'react';

interface NumberOfBeingsProps {
    name: string;
}

const NumberOfBeings = (props: NumberOfBeingsProps): ReactElement => {
    const [numberOfBeings, setNumberOfBeings] = useState('');

    return (
        <>
            <label htmlFor="number-of-beings">Number Of Beings: </label>
            <input type="text" id="number-of-beings" value={numberOfBeings} />
            <br />
        </>
    );
}

export default NumberOfBeings;
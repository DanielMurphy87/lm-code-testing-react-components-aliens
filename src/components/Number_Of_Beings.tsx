import React from 'react';

interface NumberOfBeingsProps {
    name: string;
}

function NumberOfBeings(props: NumberOfBeingsProps) {
    const [numberOfBeings, setNumberOfBeings] = React.useState('');

    return (
        <>
            <label htmlFor="number-of-beings">Number Of Beings: </label>
            <input type="text" id="number-of-beings" value={numberOfBeings} />
        </>
    );
}

export default NumberOfBeings;
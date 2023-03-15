interface NumberOfBeingsProps {
    numberOfBeings: number;
    onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {
    let errorMessage = '';

    if (numberOfBeings < 0 || numberOfBeings % 1 !== 0) {
        errorMessage = 'Number of beings must be a non-negative whole integer';
    }

    return (
        <>
            <label htmlFor="number-of-beings">Number Of Beings: </label>
            <input type="number" id="number-of-beings" value={numberOfBeings} onChange={onChangeNumberOfBeings} />
            <br />
            {errorMessage && (<div style={{ color: 'red' }}>{errorMessage}</div>)}
        </>
    );
}

export default NumberOfBeings;
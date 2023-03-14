interface NumberOfBeingsProps {
    numberOfBeings: number;
    onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {

    return (
        <>
            <label htmlFor="number-of-beings">Number Of Beings: </label>
            <input type="number" id="number-of-beings" value={numberOfBeings} onChange={onChangeNumberOfBeings} />
            <br />
        </>
    );
}

export default NumberOfBeings;
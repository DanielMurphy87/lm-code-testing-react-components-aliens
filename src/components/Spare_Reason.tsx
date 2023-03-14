interface SpareReasonProps {
    spareReason: string;
    onChangeReason: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpareReason : React.FC<SpareReasonProps> = ({ spareReason, onChangeReason }) => {

    return (
        <>
            <label htmlFor="spare-reason">Reason for sparing: </label>
            <input type="textarea" id="spare-reason" value={spareReason} onChange={onChangeReason}/>
            <br />
        </>
    );
}

export default SpareReason;
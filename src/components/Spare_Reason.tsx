import { useState } from "react";

interface SpareReasonProps {
    spareReason: string;
    onChangeReason: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpareReason: React.FC<SpareReasonProps> = ({ spareReason, onChangeReason }) => {
    const [error, setError] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reason = e.target.value;
        onChangeReason(e);
        validateReason(reason);
    };

    const validateReason = (reason: string) => {
        if (reason.trim() === "") {
            setError("Reason cannot be empty.");
        } else if (reason.length > 100) {
            setError("Reason cannot exceed 100 characters.");
        } else {
            setError("");
        }
    };

    return (
        <>
            <label htmlFor="spare-reason">Reason for sparing: </label>
            <input type="textarea" id="spare-reason" value={spareReason} onChange={handleInputChange} />
            <br />
            {error && <div style={{ color: "red" }}>{error}</div>}
        </>
    );
}

export default SpareReason;
import { ReactElement, useState } from 'react';

interface SpareReasonProps {
    name: string;
}

const SpareReason = (props: SpareReasonProps): ReactElement => {
    const [spareReason, setSpareReason] = useState('');

    return (
        <>
            <label htmlFor="spare-reason">Reason for sparing: </label>
            <input type="textarea" id="spare-reason" value={spareReason} />
            <br />
        </>
    );
}

export default SpareReason;
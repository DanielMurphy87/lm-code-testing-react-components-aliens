import React from 'react';

interface SpareReasonProps {
    name: string;
}

function SpareReason(props: SpareReasonProps) {
    const [spareReason, setSpareReason] = React.useState('');

    return (
        <>
            <label htmlFor="spare-reason">Reason for sparing: </label>
            <input type="text" id="spare-reason" value={spareReason} />
        </>
    );
}

export default SpareReason;
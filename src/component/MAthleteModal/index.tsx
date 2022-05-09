import React, { memo } from 'react';
import MContent from './MContent';

const MAthleteModal = memo((props: { id: number }) => {
    return (
        <>
            <MContent id={props.id} />
        </>

    )
})

export default MAthleteModal;
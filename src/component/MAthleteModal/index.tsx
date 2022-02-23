import React, { memo, useState } from 'react'; 
import MContent from './MContent';

const MAthleteModal = memo((props: any) => {
    const { id } = props;
    return (
        <>
            <MContent id={id} />
        </>

    )
})

export default MAthleteModal;
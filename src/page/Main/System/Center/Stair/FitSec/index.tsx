import React, { memo } from 'react'
import SecTable from '../../SecondLevel/SecTable'

const FitSec = memo((props: { location: { state: { oneOrg: string } } }) => {
    // oneOrg
    const { oneOrg } = props.location.state;
    console.log(oneOrg);
    return (
        <>
            <SecTable oneOrg={oneOrg}></SecTable>
        </>
    )
})

export default FitSec
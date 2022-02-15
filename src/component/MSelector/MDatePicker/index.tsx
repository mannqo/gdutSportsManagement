import React, { memo } from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';

const MDatePicker = memo((props: any) => {
    // console.log(props);
    const dateFormat = 'YYYY-MM-DD';

    return (
        <div>
            <DatePicker
                defaultValue={moment('2020-01-01', dateFormat)}
                format={dateFormat} />
        </div>
    )
})

export default MDatePicker
import { Button } from 'antd'
import React, { memo } from 'react'
import { importTemplate } from '../../services/excel'
import { InfoType } from '../../type/infoNum'
import MExcel from './MExcel'

const MUploadExcel = memo((props: { route: { type: InfoType }, location: { pathname: string } }) => {
    const { route: { type } } = props;

    return (
        <>
            <Button type='primary' style={{ 'marginTop': '16px' }} >
                <a href={type && importTemplate(type)}>下载导入模板</a>
            </Button>
            <MExcel type={type} />
        </>
    )
})

export default MUploadExcel
import { Button } from 'antd'
import React, { memo } from 'react'
import { importTemplate } from '../../services/excel'
import MExcel from './MExcel'

const MUploadExcel = memo((props: { route: { type: string } }) => {
    const { route: { type } } = props;
    return (
        <>
            <Button type='primary' style={{ 'marginTop': '16px' }} >
                <a href={type && importTemplate(type)}>下载导入模板</a>
            </Button>
            <MExcel />
        </>
    )
})

export default MUploadExcel
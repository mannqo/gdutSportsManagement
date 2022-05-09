import { useEffect, useState } from "react";

export const useInfo = (getInfo: (page: number) => void) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [visible, setVisible] = useState(false);

    const addAthlete = () => {
        setVisible(true);
    }
    /* 运动员信息表 */
    const hideModal = () => {
        setVisible(false);
    }

    const onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const onChange = (page: number) => {
        getInfo(page);
    }

    useEffect(() => {
        getInfo(1);
    }, [])

    return {
        addAthlete,
        selectedRowKeys,
        rowSelection,
        onChange,
        visible,
        hideModal
    }
}
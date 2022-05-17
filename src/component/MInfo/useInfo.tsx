import { useEffect, useState } from "react";

export const useInfo = (getInfo: (page: number) => void) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [visible, setVisible] = useState(false);

    const add = () => { 
        setVisible(true);
    } 
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
        add,
        selectedRowKeys,
        rowSelection,
        onChange,
        visible,
        hideModal
    }
}
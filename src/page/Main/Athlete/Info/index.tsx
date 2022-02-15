import { Button, Table, Modal } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { deleteAthleteMsg, getAthleteMsg } from '../../../../services/athlete';
import { ExclamationCircleOutlined, SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import MInfoTable from '../../../../component/MInfoTable';
import styled from 'styled-components';

const Info = memo(() => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数
    const [visible, setVisible] = useState(false);

    /* 删除运动员信息 */
    const deleteAthlete = (id: string) => {
        Modal.confirm({
            title: '确定要删除该运动员吗?',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteAthleteMsg({ id });
                Modal.info({
                    title: res.message,
                })
            }
        });
    }

    const columns = [
        {
            title: '序号',
            dataIndex: 'id',
        },
        {
            title: '学校名称',
            dataIndex: 'schoolName',
        },
        {
            title: '中文姓名',
            dataIndex: 'chineseName',
        },
        {
            title: '运动项目',
            dataIndex: 'sportProject',
        },
        {
            title: '组别',
            dataIndex: 'group',
        },
        {
            title: '年级班级',
            dataIndex: 'levelClass',
        },
        {
            title: '教练',
            dataIndex: 'belongCoach',
            render: (coach: any) => (
                <span>{JSON.parse(coach).toString()}</span>
            )
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id: string) => (
                <div>
                    <SettingOutlined />
                    &nbsp; &nbsp;
                    <DeleteOutlined onClick={() => deleteAthlete(id)} />
                </div>
            )
        },
    ];
    const deleteAll = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSelectedRowKeys([]);
        }, 1000);
    };
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
    const hasSelected = selectedRowKeys.length > 0;

    /* 获取运动员列表 */
    const getInfo = async (page: number) => {
        const res = await getAthleteMsg({ pn: page, size: 10 });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }
    const onChange = (page: number) => {
        getInfo(page)
    }

    useEffect(() => {
        getInfo(1);
    }, [])

    return (
        <>
            <div style={{ margin: 16, float: 'right' }}>
                <Button type='primary' onClick={addAthlete}> 新增 </Button>
                <Button onClick={deleteAll} disabled={!hasSelected} loading={loading}>
                    批量删除
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey='id'
                pagination={{ total: total, onChange: onChange }} />

            <Modal
                title={<MInfoTable />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                style={{ paddingBottom: 0 }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
                okText="确认"
                cancelText="取消"
            />
        </>
    )
})

export default Info;
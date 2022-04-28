import React, { memo, useEffect, useState } from 'react'
import { List, Button, Skeleton } from 'antd';
import { getNoticeMsg } from '../../../../services/notice';
import { SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const NoticeModal = memo((props: { type: string }) => {
    const { type } = props;
    const [loading, setloading] = useState(true);
    const [list, setList] = useState([]);
    const [ifMore, setIfMore] = useState(true);  // 是否还有更多信息
    const getNotice = async (pn: number) => {
        try {
            const res = await getNoticeMsg({ pn, type });
            const { data: { records } } = res;
            records.length < 10 && setIfMore(false);
            setloading(false);
            res && res.data && setList(list.concat(records));
        } catch (err) {
            setIfMore(false);
            setloading(false);
        }

    }
    const onLoadMore = () => {
        const pn = Math.floor(list.length / 10) + 1;
        getNotice(pn);
    }
    const loadMore =
        !loading && ifMore ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button type='primary' onClick={onLoadMore}>点击加载更多</Button>
            </div>
        ) : <></>;

    useEffect(() => {
        setList([]);
        getNotice(1);
    }, [])
    return (
        <ListContainer>
            <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item: any) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">edit</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={<a>{item.message}</a>}
                                description='你有一条新消息'
                            />
                            {item.isRead ? null : <SmileOutlined />}
                        </Skeleton>
                    </List.Item>
                )}
            />
        </ListContainer>

    );
})

const ListContainer = styled.div`
    /* .ant-list-item-meta-description {
        color: #077FFF;
    } */
`

export default NoticeModal;
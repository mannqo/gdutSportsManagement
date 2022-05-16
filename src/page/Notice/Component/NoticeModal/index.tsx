import React, { memo } from 'react'
import { List, Skeleton } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './index.css'
import ReadButton from './ReadButton'; 
import { useList } from './useList';
import { InfoType } from '../../../../type/infoNum';


const NoticeModal = memo((props: { type: InfoType }) => {
    const { type } = props; 
    const { loading, loadMore, list } = useList(type);
    return (
        <>
            <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item: any) => (
                    <>
                        <List.Item
                        // actions={[<a key="list-loadmore-edit">edit</a>]}
                        >
                            <ReadButton id={item.id} isRead={item.isRead} type={type} />
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    title={<a>{item.message}</a>}
                                />
                                {item.isRead ? null : <SmileOutlined />}
                            </Skeleton>
                        </List.Item>
                    </>
                )}
            />
        </>

    );
})

export default NoticeModal;
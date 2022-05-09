import { Button } from "antd";
import { useEffect, useState } from "react";
import { getNoticeMsg } from "../../../../services/notice";

export const useList = (type: string) => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [ifMore, setIfMore] = useState(true);  // 是否还有更多信息
    
    const getNotice = async (pn: number) => {
        try {
            const res = await getNoticeMsg({ pn, type });
            const { data: { records } } = res;
            records.length < 10 && setIfMore(false);
            setLoading(false);
            res && res.data && setList(list.concat(records));
        } catch (err) {
            setIfMore(false);
            setLoading(false);
        }
    }
    const onLoadMore = () => {
        const pn = Math.floor(list.length / 10) + 1;
        getNotice(pn);
    }
    const loadMore =
        !loading && ifMore ? (
            <div
                style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}
            >
                <Button type='primary' onClick={onLoadMore}>点击加载更多</Button>
            </div>
        ) : <></>;

    useEffect(() => {
        setList([]);
        getNotice(1);
    }, [])
    return {
        loading,
        loadMore,
        list
    }
}


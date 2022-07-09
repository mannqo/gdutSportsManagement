import NoticeTable from "../../Component/NoticeTable";

export const tabList = [
    {
        key: 'eventNotice',
        tab: '比赛通知',
    },
    // {
    //     key: 'approveNotice',
    //     tab: '审核通知',
    // },
];
// export type tabType = 'eventNotice' | 'approveNotice';
export type tabType = 'eventNotice';
export const contentList = {
    eventNotice: <NoticeTable type='4'/>,
    // approveNotice: <NoticeTable type='10' />,
};
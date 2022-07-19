import { InfoType } from "./infoNum";

export interface NoticeInfo {
    [key: string]: any,
    contentId: number,
    fromPerson: string,
    id: number,
    isRead: 1 | 2,  // 1已读2未读
    message: string,
    toPerson: string,
    type: InfoType
}
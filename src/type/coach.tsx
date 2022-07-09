export interface CoachInfo {
    [key: string]: any,
    number: string,
    name: string,
    idCardNumber: string,
    professitonName: string,
    projectGroup: Array<string>,
    gender: string,
    phone: string,
}
export const initialCoachInfo: CoachInfo = {
    number: '',
    name: '',
    idCardNumber: '',
    professitonName: '',
    projects: '',
    projectGroup: [],
    gender: '',
    phone: '',
}
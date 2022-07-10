interface SourceCascader {
    value: string,
    label: Array<string>
}
interface Obj {
    children?: Array<Obj>,
    label: string,
    value: string,
}
function formatArr(sourceArr: Array<string>) {
    const children: Obj[] = new Array(sourceArr.length);
    sourceArr.forEach((item, index) => {
        const obj: Obj = { value: '', label: '' };
        obj.value = item;
        obj.label = item;
        children[index] = obj;
    })
    return children;
}
export function formatCascader(sourceCascader: SourceCascader[]) {
    const len = sourceCascader.length;
    const afterCascader = new Array(len);
    sourceCascader.forEach((item, index) => {
        const obj: Obj = { children: [], label: '', value: '' };
        obj.value = item.value;
        obj.label = item.value;
        obj.children = formatArr(item.label);
        afterCascader[index] = obj;
    })
    console.log(afterCascader);

    return afterCascader;
}
export { };
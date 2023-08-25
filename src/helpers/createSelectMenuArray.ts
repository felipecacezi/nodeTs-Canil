interface ArData {
    selected: string,
    value: string,
    name: string
}
export const selectList = (data: Array<ArData>, compareData: string) => {
    return data.map((item: ArData) => {
        if (item.value === compareData) {
            item.selected = 'selected';
        } else {
            item.selected = '';
        }
        return item;
    })
}
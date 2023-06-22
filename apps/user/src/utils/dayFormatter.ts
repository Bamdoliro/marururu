export const getDay = (remainDays: number) => {
    remainDays = Math.floor(remainDays);
    if (remainDays > 0) {
        return `D-${remainDays}`;
    } else if (remainDays <= -2) {
        return `D+${-remainDays - 1}`;
    } else {
        return 'D-Day';
    }
};

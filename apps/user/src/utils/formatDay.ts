const formatDay = (remainDays: number) => {
    remainDays = Math.floor(remainDays);
    if (remainDays > 0) {
        return `D-${remainDays}`;
    }
    if (remainDays <= -2) {
        return `D+${-remainDays - 1}`;
    }
    return 'D-Day';
};

export default formatDay;

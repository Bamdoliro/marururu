export interface Date {
    year: string;
    month: string;
    day: string;
}

const formatDate = ({ year = '2022', month = '6', day = '7' }: Date) => {
    const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return date;
};

export default formatDate;

export interface Date {
    year: string;
    month: string;
    day: string;
}

const formatDate = ({ year, month, day }: Date) => {
    if (year === '' || month === '' || day === '') return '';
    const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return date;
};

export default formatDate;

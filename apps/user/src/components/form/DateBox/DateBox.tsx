import { useFormStore } from '@/store';
import { Date } from '@/types/common/client';
import { formatDate } from '@/utils';
import { Dropdown, Row } from '@maru/ui';
import { useEffect, useState } from 'react';

const DateBox = () => {
    const [form, setForm] = useFormStore();
    const [date, setDate] = useState<Date>({
        year: '',
        month: '',
        day: '',
    });

    useEffect(() => {
        if (form.applicant.birthday) {
            const date = form.applicant.birthday.split('-');
            setDate({
                year: date[0],
                month: date[1],
                day: date[2],
            });
        }
    }, [form.applicant.birthday]);

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            applicant: { ...prev.applicant, birthday: formatDate(date) },
        }));
    }, [date]);

    return (
        <Row gap={16} alignItems="flex-end">
            <Dropdown
                label="생년월일"
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={date.year}
                name="year"
                data={[
                    '2000',
                    '2001',
                    '2002',
                    '2003',
                    '2004',
                    '2005',
                    '2006',
                    '2007',
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                ]}
                placeholder="년"
            />
            <Dropdown
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={date.month}
                name="month"
                data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                placeholder="월"
            />
            <Dropdown
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={date.day}
                name="day"
                data={[
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                    '24',
                    '25',
                    '26',
                    '27',
                    '28',
                    '29',
                    '30',
                    '31',
                ]}
                placeholder="일"
            />
        </Row>
    );
};

export default DateBox;

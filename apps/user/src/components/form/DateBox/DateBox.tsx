import { useFormState } from '@/app/form/form.state';
import { Date } from '@/types/common/client';
import { formatDate } from '@/utils';
import { Row, Dropdown } from '@maru/ui';
import { useEffect, useState } from 'react';

const DateBox = () => {
    const { form, setForm } = useFormState();
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
                data={['2006', '2007']}
                placeholder="년"
            />
            <Dropdown
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={date.month}
                name="month"
                data={['1']}
                placeholder="월"
            />
            <Dropdown
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={date.day}
                name="day"
                data={['2']}
                placeholder="일"
            />
        </Row>
    );
};

export default DateBox;

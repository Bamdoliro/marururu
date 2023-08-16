import { Date } from '@/types/common/client';
import { Form } from '@/types/form/client';
import { Row, Dropdown } from '@maru/ui';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface PropsType {
    form: Form;
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
}

const DateBox = ({ form, date, setDate }: PropsType) => {
    const [birthday, setBirthday] = useState<string[]>([]);

    useEffect(() => {
        if (form.applicant?.birthday) {
            const birthdayArray = form.applicant.birthday.split('-');
            setBirthday(birthdayArray);
        }
    }, [form.applicant?.birthday]);

    return (
        <Row gap={16} alignItems="flex-end">
            <Dropdown
                label="생년월일"
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={birthday[0] ?? date.year}
                name="year"
                data={['2006', '2007']}
                placeholder="년"
            />
            <Dropdown
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={birthday[1] ?? date.month}
                name="month"
                data={['1']}
                placeholder="월"
            />
            <Dropdown
                onChange={(data: string, name: string) =>
                    setDate((prev) => ({ ...prev, [name]: data }))
                }
                value={birthday[2] ?? date.day}
                name="day"
                data={['2']}
                placeholder="일"
            />
        </Row>
    );
};

export default DateBox;

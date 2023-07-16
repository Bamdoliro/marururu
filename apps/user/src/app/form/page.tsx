'use client';

import 보호자정보 from '@/components/form/보호자정보/보호자정보';
import { FormLayout } from '@/layouts';

const FormPage = () => {
    return (
        <FormLayout title="보호자 정보">
            <보호자정보 />
        </FormLayout>
    );
};

export default FormPage;

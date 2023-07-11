'use client';

import { FormLayout } from '@/layouts';
import 지원자정보 from '@/components/form/지원자정보/지원자정보';

const FormPage = () => {
    return (
        <FormLayout title="지원자 정보">
            <지원자정보 />
        </FormLayout>
    );
};

export default FormPage;

'use client';

import 전형선택 from '@/components/form/전형선택/전형선택';
import { FormLayout } from '@/layouts';

const FormPage = () => {
    return (
        <FormLayout title="지원자 정보">
            <전형선택 />
        </FormLayout>
    );
};

export default FormPage;

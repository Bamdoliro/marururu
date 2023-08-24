import { Column } from '@maru/ui';
import { styled } from 'styled-components';

import { useFormListQuery } from '@/services/form/queries';
import FormListHeader from '../FormListHeader/FormListHeader';
import FormListItem from '../FormListItem/FormListItem';

const FormList = () => {
    const { data: formListData } = useFormListQuery();

    return (
        <Column gap={12}>
            <FormListHeader />
            {formListData &&
                formListData.map((item) => (
                    <FormListItem
                        id={item.id}
                        name={item.name}
                        birthday={item.birthday}
                        graduationType={item.graduationType}
                        school={item.school}
                        status={item.status}
                        type={item.type}
                    />
                ))}
        </Column>
    );
};

export default FormList;

const StyledFormList = styled.div``;

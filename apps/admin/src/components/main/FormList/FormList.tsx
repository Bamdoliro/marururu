import { Column } from '@maru/ui';
import { styled } from 'styled-components';

import { useFormListQuery } from '@/services/form/queries';
import FormListHeader from '../FormListHeader/FormListHeader';
import FormListItem from '../FormListItem/FormListItem';

const FormList = () => {
    const { data: formList } = useFormListQuery();

    return (
        <Column gap={12}>
            <FormListHeader />
            {formList &&
                formList.map((item) => (
                    <FormListItem
                        id={item.id}
                        name={item.name}
                        birthday={item.birthday}
                        graduationType={item.graduationType}
                        school={item.school}
                        status={item.status}
                        type={item.type}
                        totalScore={item.totalScore}
                        hasDocument={item.hasDocument}
                        firstRoundPassed={item.firstRoundPassed}
                        secondRoundPassed={item.secondRoundPassed}
                    />
                ))}
        </Column>
    );
};

export default FormList;

const StyledFormList = styled.div``;

import { useFormDetailQuery } from '@/services/form/queries';
import styled from 'styled-components';

interface Props {
    id: number;
}

const FormDetailContent = ({ id }: Props) => {
    const { data: formDetailData } = useFormDetailQuery(id);
    console.log(formDetailData);

    return <StyledFormDetailContent>{id}</StyledFormDetailContent>;
};

export default FormDetailContent;

const StyledFormDetailContent = styled.div`
    display: flex;
    gap: 48px;
    width: 100%;
    height: 900px;
`;

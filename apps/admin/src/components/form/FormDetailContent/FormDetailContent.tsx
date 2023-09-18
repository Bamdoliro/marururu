import { Column, Row } from '@maru/ui';
import styled from 'styled-components';
import FormStatus from './FormStatus/FormStatus';
import Profile from './Profile/Profile';

interface Props {
    id: number;
}

const FormDetailContent = ({ id }: Props) => {
    return (
        <StyledFormDetailContent>
            <Row gap={48}>
                <Column gap={36}>
                    <Profile id={id} />
                    <FormStatus id={id} />
                </Column>
            </Row>
        </StyledFormDetailContent>
    );
};

export default FormDetailContent;

const StyledFormDetailContent = styled.div`
    display: flex;
    gap: 48px;
    width: 100%;
    height: 900px;
`;

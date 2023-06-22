import Header from '@/components/common/Header';
import { color, font } from '@maru/styles';
import { ReactNode } from 'react';
import ProgressBar from '@/components/form/ProgressBar';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
    title: String;
}

const FormLayout = ({ children, title }: PropsType) => {
    return (
        <>
            <Header />
            <StyledFormLayout>
                <ProgressBar />
                <FormBox>
                    <InfoBox>
                        <Title>{title}</Title>
                    </InfoBox>
                    <ContentBox>{children}</ContentBox>
                </FormBox>
            </StyledFormLayout>
        </>
    );
};

export default FormLayout;

const StyledFormLayout = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${color.white};
`;

const FormBox = styled.div`
    margin: 0 auto;
    width: 810px;
`;

const InfoBox = styled.div`
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid ${color.gray300};
`;

const Title = styled.p`
    ${font.H3};
    color: ${color.gray900};
`;

const ContentBox = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 40px;
`;

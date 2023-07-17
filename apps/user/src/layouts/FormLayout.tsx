import { Header } from '@/components/common/';
import { color, font } from '@maru/theme';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ProgressBar } from '@/components/form';
import styled from 'styled-components';
import FormController from '@/components/form/FormController/FormController';

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
                    <Title>{title}</Title>
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
    min-width: 810px;
    width: fit-content;
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

import { Header } from '@/components/common/';
import { color, font } from '@maru/theme';
import { ReactNode } from 'react';
import { ProgressBar } from '@/components/form';
import { flex } from '@maru/utils';
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
                    <Title>{title}</Title>
                    <ContentBox>{children}</ContentBox>
                </FormBox>
            </StyledFormLayout>
        </>
    );
};

export default FormLayout;

const StyledFormLayout = styled.section`
    ${flex({ flexDirection: 'column' })}
    gap: 72px;
    width: 100vw;
    height: 100vh;
    background-color: ${color.white};
`;

const FormBox = styled.div`
    margin: 0 auto;
    width: 816px;
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

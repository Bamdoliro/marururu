import { Header } from '@/components/common/';
import { ProgressBar } from '@/components/form';
import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { ReactNode } from 'react';
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
                    <Text fontType="H3" color={color.gray900}>
                        {title}
                    </Text>
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
    width: 816px;
`;

const ContentBox = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 40px;
`;

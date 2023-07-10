'use client';

import { Header } from '@/components/common';
import { color, font } from '@maru/theme';
import styled from 'styled-components';

const ReadyPage = () => {
    return (
        <>
            <Header />
            <StyledReadyPage>
                <ReadyText>개발 중인 페이지에요!</ReadyText>
            </StyledReadyPage>
        </>
    );
};

export default ReadyPage;

const StyledReadyPage = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ReadyText = styled.p`
    ${font.H1}
    color: ${color.black};
`;

'use client';

import ApplicationItem from '@/components/application/ApplicationItem/ApplicationItem';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Text, UnderLineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const NAVIGATION_DATA = [
    {
        name: '학생, 학부모'
    },
    {
        name: '교사'
    }
]

const INFORMATION_DATA = [
    {
        date: '9월 16일(토) 11:00',
        place: '본교 SRC관 1층',
        deadline: '2023.09.01 ~ 2023.09.13',
        applicable: true,
        statusText: '신청 가능'
    },
    {
        date: '10월 4일 (수) 19:00',
        place: '본교 SRC관 1층',
        deadline: '2023.09.11 ~ 2023.09.25',
        applicable: true,
        statusText: '신청 가능'
    },
    {
        date: '7월 8일 (토) 11:00',
        place: '본교 SRC관 1층',
        deadline: '2023.06.25 ~ 2023.07.02',
        applicable: false,
        statusText: '마감'
    },
    {
        date: '8월 26일(토) 11:00',
        place: '본교 SRC관 1층',
        deadline: '2023.08.09 ~ 2023.08.23',
        applicable: false,
        statusText: '조기 마감'
    },
]

type ApplicationStep = "학생, 학부모" | "교사";

const ApplicationPage = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [fieldStep, setFieldStep] = useState<ApplicationStep>("학생, 학부모")
    
    return (
        <AppLayout header footer>
            <StyledApplicationPage>
                <Text fontType="H1" color={color.gray900}>
                    2024학년도 부산소프트웨어마이스터고등학교
                    <br />
                    입학전형 설명회 참가 신청
                </Text>
                <NavigationBar>
                {NAVIGATION_DATA.map(({ name }, index) => (
                    <UnderLineButton
                        key={`navigation ${index}`}
                        active={name === fieldStep}
                        onClick={() => setFieldStep(name)}>
                        {name}
                    </UnderLineButton>
                ))}
                </NavigationBar>
                <ApplicationItemBox>
                    {INFORMATION_DATA.map(( {date, place, deadline, applicable, statusText}, index) => (
                        <ApplicationItem
                            date={date}
                            place={place}
                            deadline={deadline}
                            applicable={applicable}
                            statusText={statusText}
                        />
                    ))}
                </ApplicationItemBox>
            </StyledApplicationPage>
        </AppLayout>
    )
}

export default ApplicationPage;

const StyledApplicationPage = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 312px;
    margin-top: 82px;
`

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 54px;
    margin: 36px 0px;
    background-color: ${color.white};
`

const ApplicationItemBox = styled.div`
    width: 100%;
    ${flex({ alignItems: 'center' })}
    align-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
`;
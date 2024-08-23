import {
  이차_전형_끝,
  이차_전형_시작,
  일차_합격_발표,
  입학_등록_기간,
  입학_등록_기간_마감,
  제출_마감_날짜,
  제출_시작_날짜,
  최종_합격_발표,
} from '@/constants/form/constant';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ScheduleItem from './ScheduleBoxItem/ScheduleBoxItem';

const SCHEDULE_DATA = [
  {
    id: 0,
    date: '2024년 10월 14일 ~ 10월17일 17:00',
    plan: '1차 원서접수',
    startTime: 제출_시작_날짜,
    endTime: 제출_마감_날짜,
  },
  {
    id: 1,
    date: '2024년 10월 21일 15:00',
    plan: '1차 합격자 발표',
    startTime: 일차_합격_발표,
    endTime: 이차_전형_시작,
  },
  {
    id: 2,
    date: '2024년 10월 25일 09:30 ~ 15:00',
    plan: '2차 전형',
    startTime: 이차_전형_시작,
    endTime: 이차_전형_끝,
  },
  {
    id: 3,
    date: '2024년 10월 31일 15:00',
    plan: '최종 합격자 발표',
    startTime: 최종_합격_발표,
    endTime: 입학_등록_기간,
  },
  {
    id: 4,
    date: '2024년 12월 16일 ~ 18일',
    plan: '입학등록기간',
    startTime: 입학_등록_기간,
    endTime: 입학_등록_기간_마감,
  },
] as const;

const ScheduleBox = () => {
  return (
    <StyledScheduleBox>
      <Text fontType="H3" color={color.gray900}>
        2025학년도 신입생 입학 일정
      </Text>
      <ScheduleBoxList>
        {SCHEDULE_DATA.map((item) => (
          <ScheduleItem
            key={item.id}
            date={item.date}
            plan={item.plan}
            startTime={item.startTime}
            endTime={item.endTime}
          />
        ))}
      </ScheduleBoxList>
    </StyledScheduleBox>
  );
};

export default ScheduleBox;

const StyledScheduleBox = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 32px;
  width: 492px;
  height: 100%;
  padding: 0px 32px;
`;

const ScheduleBoxList = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 16px;
  height: 100%;
  width: 100%;
`;

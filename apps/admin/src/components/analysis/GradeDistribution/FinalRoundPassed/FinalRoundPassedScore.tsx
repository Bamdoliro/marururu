import { Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';

const FinalRoundPassedScore = () => {
  return (
    <TotalBox>
      <ApplicantsBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          최고점 점수
        </Text>
        <Text fontType="D1" width={60}>
          최하위 점수
        </Text>
      </ApplicantsBox>
      <ApplicantsBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          전체 경쟁률
        </Text>
        <Text fontType="D1" width={60}>
          숫자
        </Text>
      </ApplicantsBox>
    </TotalBox>
  );
};

export default FinalRoundPassedScore;

const TotalBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-left: 12px;
`;

const ApplicantsBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  margin-top: 24px;
`;

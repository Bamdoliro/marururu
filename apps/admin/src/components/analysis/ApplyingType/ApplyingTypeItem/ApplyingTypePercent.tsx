import { Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';

const ApplyingTypePercent = () => {
  return (
    <TotalBox>
      <ApplicantsBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          일반 전형 지원 비율
        </Text>
        <Text fontType="D1" width={60}>
          89%
        </Text>
      </ApplicantsBox>
      <ApplicantsBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          특별 전형 지원 비율
        </Text>
        <Text fontType="D1" width={60}>
          65%
        </Text>
      </ApplicantsBox>
    </TotalBox>
  );
};

export default ApplyingTypePercent;

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

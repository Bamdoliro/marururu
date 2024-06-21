import { Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import useGenderRatioData from './FinalRoundPassedGenderRatio.hooks';
import type { FormTypeMainCategory } from '@/types/analysis/client';

const FinalRoundPassedScore = () => {
  const mainCategories: FormTypeMainCategory[] = ['REGULAR', 'SPECIAL', 'SUPERNUMERARY'];
  const { overallMale, overallFemale } = useGenderRatioData(mainCategories);

  return (
    <TotalBox>
      <ApplicantsBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          전체 남학생 지원 인원
        </Text>
        <Text fontType="D1" width={60}>
          {overallMale}
        </Text>
      </ApplicantsBox>
      <ApplicantsBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          전체 여학생 지원 인원
        </Text>
        <Text fontType="D1" width={60}>
          {overallFemale}
        </Text>
      </ApplicantsBox>
    </TotalBox>
  );
};
const TotalBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 20px;
  margin-left: 12px;
`;

const ApplicantsBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  margin-top: 24px;
`;

export default FinalRoundPassedScore;

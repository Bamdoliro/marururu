import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import useAdmissionData from '../GenderRatio.hooks';
import type {
  AnalysisApplicantType,
  FormTypeMainCategory,
} from '@/types/analysis/client';

const FinalRoundPassedMain = () => {
  const statusList: AnalysisApplicantType[] = ['PASSED'];

  const useAdmissionDataWithStatus = (type: FormTypeMainCategory) => {
    return useAdmissionData(statusList, type);
  };

  const { data: RegularData } = useAdmissionDataWithStatus('REGULAR');
  const { data: SpecialData } = useAdmissionDataWithStatus('SPECIAL');
  const { data: SupernumeraryData } = useAdmissionDataWithStatus('SUPERNUMERARY');

  const RegularMaleCount = RegularData.overallMale || 0;
  const RegularFemaleCount = RegularData.overallFemale || 0;
  const SpecialMaleCount = SpecialData.overallMale || 0;
  const SpecialFemaleCount = SpecialData.overallFemale || 0;
  const SupernumeraryMaleCount = SupernumeraryData.overallMale || 0;
  const SupernumeraryFemaleCount = SupernumeraryData.overallFemale || 0;
  const overallMale = RegularMaleCount + SpecialMaleCount + SupernumeraryMaleCount;
  const overallFemale =
    RegularFemaleCount + SpecialFemaleCount + SupernumeraryFemaleCount;
  const TotalMaleCountNoSupernumerary = RegularMaleCount + SpecialMaleCount;
  const TotalFemaleCountNoSupernumerary = RegularFemaleCount + SpecialFemaleCount;

  return (
    <LeftBox>
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
      <TableBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          전형별 학생 성비
        </Text>
        <Column>
          <Row>
            <Th width={160} height={56} borderTopLeftRadius={12}>
              ㅤ
            </Th>
            <Th width={160} height={56}>
              남학생
            </Th>
            <Th width={160} height={56} borderTopRightRadius={12}>
              여학생
            </Th>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              일반 전형
            </Td>
            <Td width={160} height={56}>
              {RegularMaleCount}
            </Td>
            <Td width={160} height={56}>
              {RegularFemaleCount}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              특별 전형
            </Td>
            <Td width={160} height={56}>
              {SpecialMaleCount}
            </Td>
            <Td width={160} height={56}>
              {SpecialFemaleCount}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              정원 외 전형
            </Td>
            <Td width={160} height={56}>
              {SupernumeraryMaleCount}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {SupernumeraryFemaleCount}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              전체 (정원 외 제외)
            </Td>
            <Td width={160} height={56}>
              {TotalMaleCountNoSupernumerary}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {TotalFemaleCountNoSupernumerary}
            </Td>
          </Row>
        </Column>
      </TableBox>
    </LeftBox>
  );
};
const LeftBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 100px;
`;

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
const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 24px;
`;

export default FinalRoundPassedMain;

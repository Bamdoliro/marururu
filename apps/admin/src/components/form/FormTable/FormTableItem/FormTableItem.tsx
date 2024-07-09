import TableItem from '@/components/common/TableItem/TableItem';
import { ROUTES } from '@/constants/common/constant';
import { FORM_TYPE } from '@/constants/main/constants';
import { useFormToPrintStore } from '@/store/form/formToPrint';
import { useIsFormToPrintSelectingValueStore } from '@/store/form/isFormToPrintSelecting';
import { useIsSecondRoundResultEditingValueStore } from '@/store/form/isSecondRoundResultEditing';
import { useSecondRoundResultStore } from '@/store/form/secondRoundResult';
import type { Form, FormType, PassStatusType, FormStatus } from '@/types/form/client';
import { color } from '@maru/design-token';
import { CheckBox, Dropdown, Row, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';
import type { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const FormTableItem = ({
  id,
  examinationNumber,
  name,
  graduationType,
  school,
  type,
  status,
  totalScore,
  firstRoundPassed,
  secondRoundPassed,
}: Form) => {
  const router = useRouter();

  const getStatusColor = (status: boolean | null | string) => {
    return typeof status !== 'boolean'
      ? color.gray600
      : status
      ? color.maruDefault
      : color.red;
  };

  const getDocumentStatusColor = (status: FormStatus) => {
    switch (status) {
      case 'APPROVED':
        return color.maruDefault;
      case 'REJECTED':
        return color.red;
      default:
        return color.gray900;
    }
  };

  const getStatusString = (
    status: boolean | null,
    trueString: string,
    falseString: string
  ) => {
    return typeof status !== 'boolean' ? '미정' : status ? trueString : falseString;
  };

  const getDocumentStatusString = (status: FormStatus) => {
    switch (status) {
      case 'APPROVED':
        return '승인';
      case 'REJECTED':
        return '반려';
      case 'SUBMITTED':
      case 'FINAL_SUBMITTED':
        return '접수 중';
      default:
        return '접수';
    }
  };

  const getSubmittedStatusString = (status: FormStatus) => {
    switch (status) {
      case 'SUBMITTED':
        return '초안 제출';
      default:
        return '최종 제출';
    }
  };

  const isSecondRoundResultEditing = useIsSecondRoundResultEditingValueStore();
  const [secondRoundResult, setSecondRoundResult] = useSecondRoundResultStore();

  const handleSecondPassResultDropdownChange = (value: string) => {
    setSecondRoundResult((prev) => ({
      ...prev,
      [id]: value as PassStatusType,
    }));
  };

  const isFormToPrintSelecting = useIsFormToPrintSelectingValueStore();

  const [formToPrint, setFormToPrint] = useFormToPrintStore();

  const handleFormToPrintSelectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    setFormToPrint((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <DirectButton
      onClick={() =>
        isSecondRoundResultEditing ||
        isFormToPrintSelecting ||
        router.push(`${ROUTES.FORM}/${id}`)
      }
      style={{
        cursor:
          isSecondRoundResultEditing || isFormToPrintSelecting ? 'default' : 'pointer',
      }}
    >
      <TableItem>
        <Row gap={48}>
          {isFormToPrintSelecting ? (
            <CheckBox
              checked={formToPrint[id]}
              onChange={handleFormToPrintSelectChange}
            />
          ) : null}
          <Text fontType="p2" width={60}>
            {examinationNumber}
          </Text>
          <Text fontType="p2" width={60}>
            {name}
          </Text>
          <Text fontType="p2" width={160} ellipsis>
            {graduationType === 'QUALIFICATION_EXAMINATION' ? '검정고시' : school}
          </Text>
          <Text fontType="p2" width={240}>
            {FORM_TYPE[type as FormType]}
          </Text>
        </Row>
        <Row gap={48} alignItems="center">
          <Text fontType="p2" width={60} color={color.gray900}>
            {getSubmittedStatusString(status)}
          </Text>
          <Text fontType="p2" width={60} color={getDocumentStatusColor(status)}>
            {getDocumentStatusString(status)}
          </Text>
          <Text fontType="p2" width={60} color={getStatusColor(firstRoundPassed)}>
            {getStatusString(firstRoundPassed, '합격', '불합격')}
          </Text>
          <Text
            fontType="p2"
            width={60}
            color={typeof totalScore !== 'number' ? color.gray600 : color.gray900}
          >
            {typeof totalScore !== 'number' ? '미정' : Number(totalScore.toFixed(3))}
          </Text>
          {isSecondRoundResultEditing ? (
            <Dropdown
              name="pass"
              size="SMALL"
              width={100}
              value={
                secondRoundResult[id] ||
                getStatusString(secondRoundPassed, '합격', '불합격')
              }
              data={['합격', '불합격', '미정']}
              onChange={handleSecondPassResultDropdownChange}
            />
          ) : (
            <Text fontType="p2" width={60} color={getStatusColor(secondRoundPassed)}>
              {getStatusString(secondRoundPassed, '합격', '불합격')}
            </Text>
          )}
        </Row>
      </TableItem>
    </DirectButton>
  );
};

export default FormTableItem;

const DirectButton = styled.button`
  text-align: start;
`;

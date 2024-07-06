import TableHeader from '@/components/common/TableHeader/TableHeader';
import { useFormListQuery } from '@/services/form/queries';
import { useSetFormToPrintStore } from '@/store/form/formToPrint';
import { useIsFormToPrintSelectingValueStore } from '@/store/form/isFormToPrintSelecting';
import { useIsSecondRoundResultEditingValueStore } from '@/store/form/isSecondRoundResultEditing';
import { CheckBox, Row, Text } from '@maru/ui';
import type { ChangeEventHandler } from 'react';

const FormTableHeader = () => {
  const isSecondRoundResultEditing = useIsSecondRoundResultEditingValueStore();
  const isFormToPrintSelecting = useIsFormToPrintSelectingValueStore();

  const { data: formListData } = useFormListQuery();

  const formIdList = formListData?.map((form) => form.id);

  const setFormToPrint = useSetFormToPrintStore();

  const handleAllFormToPrintSelectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;

    if (!formIdList) return;

    formIdList?.forEach((formId) => {
      setFormToPrint((prev) => ({ ...prev, [formId]: checked }));
    });
  };

  return (
    <TableHeader>
      <Row gap={48}>
        {isFormToPrintSelecting ? (
          <CheckBox onChange={handleAllFormToPrintSelectChange} />
        ) : null}
        <Text fontType="p2" width={60}>
          수험번호
        </Text>
        <Text fontType="p2" width={60}>
          이름
        </Text>
        <Text fontType="p2" width={160}>
          학교
        </Text>
        <Text fontType="p2" width={240}>
          전형
        </Text>
      </Row>
      <Row gap={48}>
        <Text fontType="p2" width={60}>
          제출상태
        </Text>
        <Text fontType="p2" width={60}>
          제출서류
        </Text>
        <Text fontType="p2" width={60}>
          1차 결과
        </Text>
        <Text fontType="p2" width={60}>
          최종 점수
        </Text>
        <Text fontType="p2" width={isSecondRoundResultEditing ? 100 : 60}>
          2차 결과
        </Text>
      </Row>
    </TableHeader>
  );
};

export default FormTableHeader;

import {
  useEditSecondRoundResultMutation,
  usePrintFormUrlMutation,
} from '@/services/form/mutations';
import { useFormToPrintValueStore } from '@/store/form/formToPrint';
import { useSecondRoundResultValueStore } from '@/store/form/secondRoundResult';

export const useSecondRoundResultEditAction = () => {
  const secondRoundResult = useSecondRoundResultValueStore();
  const secondRoundResultData = {
    formList: Object.entries(secondRoundResult).map(([formId, passStatus]) => {
      return {
        formId: Number(formId),
        pass: passStatus === '미정' ? null : passStatus === '합격',
      };
    }),
  };
  const { editSecondRoundResult } =
    useEditSecondRoundResultMutation(secondRoundResultData);

  const handleSecondRoundResultEditCompleteButtonClick = () => {
    editSecondRoundResult();
  };

  return { handleSecondRoundResultEditCompleteButtonClick };
};

export const usePrintFormURLAction = () => {
  const formToPrint = useFormToPrintValueStore();
  const formIdList = Object.entries(formToPrint).reduce(
    (acc: number[], [formId, isSelected]) =>
      isSelected ? [...acc, Number(formId)] : acc,
    []
  );
  const { printFormUrl } = usePrintFormUrlMutation();
  const handlePrintFormUrlButtonClick = () => {
    const check = window.open('');
    check?.close();
    printFormUrl(formIdList);
  };

  return { handlePrintFormUrlButtonClick };
};

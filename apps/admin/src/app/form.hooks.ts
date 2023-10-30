import { useEditSecondRoundResultMutation } from '@/services/form/mutations';
import { useDownloadFormUrlQuery } from '@/services/form/queries';
import { useFormToPrintValueStore } from '@/store/form/formToPrint';
import { useSecondRoundResultValueStore } from '@/store/form/secondRoundResult';
import { useEffect } from 'react';

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

export const useDownloadFormURLAction = () => {
  const formToPrint = useFormToPrintValueStore();
  const formIdList = Object.entries(formToPrint).reduce(
    (acc: number[], [formId, isSelected]) =>
      isSelected ? [...acc, Number(formId)] : acc,
    []
  );

  const { data: formListData, refetch, status } = useDownloadFormUrlQuery(formIdList);

  useEffect(() => {
    if (formListData && status === 'success') {
      formListData.forEach((form) => {
        const link = document.createElement('a');
        link.href = form.formUrl;
        link.download = `${form.examinationNumber}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
    }
  }, [formListData]);

  const handleDownloadFormUrlButtonClick = () => {
    refetch();
  };

  return { handleDownloadFormUrlButtonClick };
};

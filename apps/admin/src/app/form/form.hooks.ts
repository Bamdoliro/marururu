import {
  useEditSecondRoundResultMutation,
  useEditSecondRoundResultAutoMutation,
  usePrintFormUrlMutation,
} from '@/services/form/mutations';
import { useExportAllAddmissionTicket } from '@/services/form/queries';
import { useFormToPrintValueStore } from '@/store/form/formToPrint';
import { useSecondRoundResultValueStore } from '@/store/form/secondRoundResult';
import { useState } from 'react';
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

export const useSecondRoundResultEditAutoAction = () => {
  const { editSecondResultAuto } = useEditSecondRoundResultAutoMutation();

  const handleSecondRoundResultEditAuto = () => {
    editSecondResultAuto();
  };

  return {
    handleSecondRoundResultEditAuto,
  };
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

export const useAllAdmissionTicket = () => {
  const { refetch } = useExportAllAddmissionTicket();
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadAllAdmissionTicket = async () => {
    try {
      setIsLoading(true);
      const { data } = await refetch();
      if (!data) return;

      const blob = new Blob([data]);
      const ticketURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = ticketURL;
      link.download = '전체 접수증.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(ticketURL);
    } catch (error) {
      alert('다운로드 다시 시도해주세요.');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleDownloadAllAdmissionTicket, isLoading };
};

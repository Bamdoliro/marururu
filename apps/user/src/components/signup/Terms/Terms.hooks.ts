import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

export const useTerms = (setTermsAgree: Dispatch<SetStateAction<boolean>>) => {
  const [allCheck, setAllCheck] = useState(false);
  const [checkOne, setChecktOne] = useState(false);
  const [checkTwo, setChecktTwo] = useState(false);

  const handleAllCheckButtonClick = () => {
    if (allCheck === false) {
      setChecktOne(true);
      setChecktTwo(true);
    } else {
      setChecktOne(false);
      setChecktTwo(false);
    }
  };

  const handleCheckOneButtonClick = () => {
    if (checkOne === false) {
      setChecktOne(true);
    } else {
      setChecktOne(false);
    }
  };

  const handleCheckTwoButtonClick = () => {
    if (checkTwo === false) {
      setChecktTwo(true);
    } else {
      setChecktTwo(false);
    }
  };

  useEffect(() => {
    if (checkOne === true && checkTwo === true) {
      setAllCheck(true);
      setTermsAgree(true);
    } else {
      setAllCheck(false);
    }
  }, [checkOne, checkTwo, setTermsAgree]);

  return {
    handleAllCheckButtonClick,
    handleCheckOneButtonClick,
    handleCheckTwoButtonClick,
    allCheck,
    checkOne,
    checkTwo,
  };
};

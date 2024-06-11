import { IconArrowRight } from '@maru/icon';
import { color, font } from '@maru/design-token';
import { flex } from '@maru/utils';
import type { Dispatch, SetStateAction } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ROUTES } from '@/constants/common/constant';

interface Props {
  setTermsAgree: Dispatch<SetStateAction<boolean>>;
}

const Terms = ({ setTermsAgree }: Props) => {
  const [checkAll, setCheckAll] = useState(false);
  const [checkOne, setChecktOne] = useState(false);
  const [checkTwo, setChecktTwo] = useState(false);
  const [checkThree, setChecktThree] = useState(false);

  const handleCheckAll = () => {
    if (checkAll === false) {
      setChecktOne(true);
      setChecktTwo(true);
      setChecktThree(true);
    } else {
      setChecktOne(false);
      setChecktTwo(false);
      setChecktThree(false);
    }
  };

  const handleCheckOne = () => {
    if (checkOne === false) {
      setChecktOne(true);
    } else {
      setChecktOne(false);
    }
  };

  const handleCheckTwo = () => {
    if (checkTwo === false) {
      setChecktTwo(true);
    } else {
      setChecktTwo(false);
    }
  };

  const handleCheckThree = () => {
    if (checkThree === false) {
      setChecktThree(true);
    } else {
      setChecktThree(false);
    }
  };

  useEffect(() => {
    if (checkOne === true && checkTwo === true) {
      setCheckAll(true);
      setTermsAgree(true);
    } else {
      setCheckAll(false);
    }
  }, [checkOne, checkTwo, setTermsAgree]);

  return (
    <StyledTerms>
      <Agreement>
        <input
          type="checkbox"
          id="check-all"
          checked={checkAll}
          onChange={handleCheckAll}
        />
        <label htmlFor="check-all">약관 전체동의</label>
      </Agreement>
      <hr />
      <Agreement>
        <input
          type="checkbox"
          id="agreement1"
          checked={checkOne}
          onChange={handleCheckOne}
        />
        <label htmlFor="agreement1">이용약관 동의</label>
        <AgreementLink onClick={() => window.open(ROUTES.TERMUSE)}>
          [ 필수 ] <IconArrowRight color={color.maruDefault} width={12} height={12} />
        </AgreementLink>
      </Agreement>
      <Agreement>
        <input
          type="checkbox"
          id="agreement2"
          checked={checkTwo}
          onChange={handleCheckTwo}
        />
        <label htmlFor="agreement2">개인정보 수집 이용동의</label>
        <AgreementLink onClick={() => window.open(ROUTES.PRIVACYCOLLECTION)}>
          [ 필수 ] <IconArrowRight color={color.maruDefault} width={12} height={12} />
        </AgreementLink>
      </Agreement>
      <Agreement>
        <input
          type="checkbox"
          id="agreement3"
          checked={checkThree}
          onChange={handleCheckThree}
        />
        <label htmlFor="agreement3">개인정보 처리 방침 동의</label>
        <AgreementLink onClick={() => window.open(ROUTES.PRIVACY)}>
          [ 필수 ] <IconArrowRight color={color.maruDefault} width={12} height={12} />
        </AgreementLink>
      </Agreement>
    </StyledTerms>
  );
};

export default Terms;

const StyledTerms = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 10px;
  width: 100%;
`;

const Agreement = styled.div`
  ${font.btn3};
  color: ${color.gray500};
  display: flex;
  gap: 5px;
`;

const AgreementLink = styled.div`
  ${flex({ alignItems: 'center' })}
  ${font.btn3};
  color: ${color.maruDefault};
  display: flex;
  cursor: pointer;
`;

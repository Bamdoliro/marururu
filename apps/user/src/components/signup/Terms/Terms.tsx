import { IconArrowRight } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useTerms } from './Terms.hooks';

interface Props {
    setTermsAgree: Dispatch<SetStateAction<boolean>>;
}

const Terms = ({ setTermsAgree }: Props) => {
    const {
        handleAllCheckButtonClick,
        handleCheckOneButtonClick,
        handleCheckTwoButtonClick,
        allCheck,
        checkOne,
        checkTwo,
    } = useTerms(setTermsAgree);

    return (
        <StyledTerms>
            <Agreement>
                <input
                    type="checkbox"
                    id="all-check"
                    checked={allCheck}
                    onChange={handleAllCheckButtonClick}
                />
                <label htmlFor="all-check">이용약관 전체동의</label>
            </Agreement>
            <hr />
            <Agreement>
                <input
                    type="checkbox"
                    id="agreement1"
                    checked={checkOne}
                    onChange={handleCheckOneButtonClick}
                />
                <label htmlFor="agreement1">개인정보 수집 이용동의</label>
                <AgreementLink>
                    [ 필수 ] <IconArrowRight color={color.maruDefault} width={12} height={12} />
                </AgreementLink>
            </Agreement>
            <Agreement>
                <input
                    type="checkbox"
                    id="agreement2"
                    checked={checkTwo}
                    onChange={handleCheckTwoButtonClick}
                />
                <label htmlFor="agreement2">약관 전체동의</label>
                <AgreementLink>
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

import { IconArrowRight } from '@maru/icon';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    setTermsAgree: Dispatch<SetStateAction<boolean>>;
}

const Terms = ({ setTermsAgree }: PropsType) => {
    const [allCheck, setAllCheck] = useState(false);
    const [checkOne, setChecktOne] = useState(false);
    const [checkTwo, setChecktTwo] = useState(false);

    const allCheckEvent = () => {
        if (allCheck === false) {
            setChecktOne(true);
            setChecktTwo(true);
        } else {
            setChecktOne(false);
            setChecktTwo(false);
        }
    };

    const checkOneEvent = () => {
        if (checkOne === false) {
            setChecktOne(true);
        } else {
            setChecktOne(false);
        }
    };

    const checkTwoEvent = () => {
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
    }, [checkOne, checkTwo]);

    return (
        <StyledTerms>
            <Agreement>
                <input type="checkbox" id="all-check" checked={allCheck} onChange={allCheckEvent} />
                <label htmlFor="all-check">이용약관 전체동의</label>
            </Agreement>
            <hr />
            <Agreement>
                <input
                    type="checkbox"
                    id="agreement1"
                    checked={checkOne}
                    onChange={checkOneEvent}
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
                    onChange={checkTwoEvent}
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

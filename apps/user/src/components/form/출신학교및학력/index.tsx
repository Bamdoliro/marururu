import { ButtonInput, Input, Radio } from '@maru/ui';
import { RadioGroup } from '@maru/ui';
import { useState } from 'react';
import { styled } from 'styled-components';

const 출신학교및학력 = () => {
    const [information, setInformation] = useState({
        almaMater: '',
        niceNumber: '',
        gradurationStatus: '',
        gradurationYear: '',
        regions: { 시or도: '', 시or군or구: '' },
        teachersName: '',
        teachersPhone: '',
    });
    return (
        <Styled출신학교및학력>
            <ButtonInput
                label="출신학교"
                buttonText="검색"
                buttonWidth="68px"
                handleButtonClick={() => {}}
                placeholder="클릭하여 검색하기"
                readOnly
            />

            <Input label="학교 나이스번호" placeholder="뭐시기 뭐시기" />

            <RadioGroup label="졸업 구분">
                <Radio text="졸업 예정" value="졸업 예정" name="졸업 구분" />
                <Radio text="졸업" value="졸업" name="졸업 구분" />
                <Radio text="고입 검정" value="고입 검정" name="졸업 구분" />
            </RadioGroup>

            <Input label="졸업 년도, 합격 년도" placeholder="뭐시기 뭐시기" />

            <ButtonInput
                label="지역"
                buttonText="검색"
                buttonWidth="68px"
                handleButtonClick={() => {}}
                placeholder="도로명 주소"
                readOnly
            />
            <div></div>
            <Input label="작성 교사 이름" placeholder="뭐시기 뭐시기" />
            <Input label="작성 교사 연락처" placeholder="뭐시기 뭐시기" />
        </Styled출신학교및학력>
    );
};

export default 출신학교및학력;

const Styled출신학교및학력 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 77px);
    gap: 30px 48px;
`;

const RegionBox = styled.div`
    display: flex;
    gap: 24px;
`;

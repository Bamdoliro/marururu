import { ButtonInput, Input } from '@maru/ui';
import { RadioGroup } from '@maru/ui';
import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';

const 출신학교및학력 = () => {
    const [information, setInformation] = useState({
        almaMater: '',
        neisNumber: '',
        gradurationStatus: '',
        gradurationYear: '',
        regions: '',
        teacherName: '',
        teacherPhone: '',
    });

    const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInformation({ ...information, [e.target.name]: e.target.value });
    };

    return (
        <Styled출신학교및학력>
            <ButtonInput
                name="almaMater"
                label="출신학교"
                buttonText="검색"
                buttonWidth="68px"
                onChange={handleInput}
                handleButtonClick={() => {}}
                placeholder="클릭하여 검색하기"
                readOnly
            />
            <Input
                name="neisNumber"
                label="학교 나이스번호"
                placeholder="뭐시기 뭐시기"
                onChange={handleInput}
            />
            <RadioGroup
                label="졸업 구분"
                name="gradurationStatus"
                list={['졸업 예정', '졸업', '고입 검정']}
                onChange={handleInput}
            />
            <Input
                name="gradurationYear"
                label="졸업 년도, 합격 년도"
                placeholder="뭐시기 뭐시기"
                onChange={handleInput}
            />
            <ButtonInput
                name="regions"
                label="지역"
                buttonText="검색"
                buttonWidth="68px"
                handleButtonClick={() => {}}
                placeholder="도로명 주소"
                readOnly
                onChange={handleInput}
            />
            <div></div>
            <Input
                name="teacherName"
                label="작성 교사 이름"
                placeholder="뭐시기 뭐시기"
                onChange={handleInput}
            />
            <Input
                name="teacherPhone"
                label="작성 교사 연락처"
                placeholder="뭐시기 뭐시기"
                onChange={handleInput}
            />
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

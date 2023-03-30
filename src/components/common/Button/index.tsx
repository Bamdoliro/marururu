import { MouseEventHandler } from 'react';
import { ButtonOptionType } from 'types/common/button.type';
import * as S from './style';

interface PropsType {
    onClick: MouseEventHandler<HTMLButtonElement>;
    value: string;
    option: ButtonOptionType;
    width: string;
}

const Button = ({ onClick, value, width }: PropsType) => {
    return (
            <S.Button option="FILLED" style={{ width }}>
                {value}
            </S.Button>
    )
}

export default Button;
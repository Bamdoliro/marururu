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
        <S.Button option="PRIMARY" style={{ width }}>
            <S.ButtonText>
            {value}
            </S.ButtonText>
        </S.Button>
    )
}

export default Button;
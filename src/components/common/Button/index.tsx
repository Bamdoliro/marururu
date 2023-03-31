import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const Button = ({ onClick, value, option="PRIMARY", width }: ButtonPropsType) => {
    return (
        <S.Button onClick={onClick} option={option} style={{ width }}>
            <S.ButtonText>{value}</S.ButtonText>
        </S.Button>
    )
}

export default Button;
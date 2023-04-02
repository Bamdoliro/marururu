import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const Button = ({ onClick, value, option, color, icon }: ButtonPropsType) => {
    return (
        <S.Button onClick={onClick} option={option} color={color}>
            {icon && <S.ButtonIcon src={icon} />}
            <S.ButtonText>{value}</S.ButtonText>
        </S.Button>
    )
}

export default Button;
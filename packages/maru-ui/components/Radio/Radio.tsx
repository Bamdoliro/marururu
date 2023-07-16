import { font, color } from '@maru/theme';
import styled from 'styled-components';
import Row from '../Flex/Row';

interface PropsType {
    label?: string;
    name: string;
    value: string;
}

const Radio = ({ label, name, value }: PropsType) => {
    return (
        <div>
            <Label>{label}</Label>
            <Row gap={8} alignItems="center">
                <input type="radio" id={value} value={value} name={name} />
                <label htmlFor={value}>{value}</label>
            </Row>
        </div>
    );
};

export default Radio;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    padding-bottom: 8px;
`;

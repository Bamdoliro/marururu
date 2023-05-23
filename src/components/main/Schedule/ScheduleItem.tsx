import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../../common/Flex/column";


interface propstype{
    date: string;
    plan: string;
}


const ScheduleItem = ({date, plan} : propstype ) => {
    return(
        <Column gap="8px" height="50px">
            <Date>{date}</Date>
            <Borderbottom />
            <Plan>{plan}</Plan>
        </Column>
    )
}

export default ScheduleItem;

const Date = styled.p`
    ${font.context}
    color: ${color.gray900};
`;


const Borderbottom = styled.div`
    border: 1px solid;
    color: ${color.gray300};
`;


const Plan = styled.p`
  ${font.H5}
  color: ${color.gray900};
`;

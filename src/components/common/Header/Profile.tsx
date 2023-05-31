import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import ArrowDropDown from "../Icon/ArrowDropDown";

interface PropsType {
  name: string;
}

const Profile = ({ name }: PropsType) => {
  return (
    <StyledProfile>
      <Name>{name} 님</Name>
      <ArrowDropDown />
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Name = styled.p`
  ${font.H5};
  color: ${color.gray900};
`;

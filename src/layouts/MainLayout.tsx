import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  calendar: ReactNode;
  faq: ReactNode;
  admissionReqs: ReactNode;
}

const AppLayout = ({
  calendar,
  faq,
  admissionReqs
}: PropsType) => {
  return (
    <StyledMainLayout>

    </StyledMainLayout>
  );
};

export default AppLayout;

const StyledMainLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
import { color } from "@/styles/color";
import { ReactNode } from "react";
import Image from "next/image";
import styled from "styled-components";

interface PropsInterface {
  children: ReactNode;
}

const AuthLayout = ({ children }: PropsInterface) => {
  return (
    <StyledAuthLayout>
      <AuthBox>
        <Image src="/assets/logo.svg" width={232} height={70} alt="logo" />
        {children}
      </AuthBox>
    </StyledAuthLayout>
  );
};

export default AuthLayout;

const StyledAuthLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 451px;
  height: 100%;
`;

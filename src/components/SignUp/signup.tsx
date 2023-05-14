import styled from "styled-components";
import AuthLayout from "@/layouts/AuthLayout";
import ButtonInput from "../Common/Input/button";
import PreviewInput from "../Common/Input/preview";

const SignUp = () => {
  return (
    <AuthLayout>
      <StyledSignUp>
        <ButtonInput
          buttonText="인증"
          buttonClick={() => console.log("버튼 클릭")}
          desc="이메일"
          width="100%"
        />
        <PreviewInput desc="비밀번호" width="100%" />
        <PreviewInput desc="비밀번호 재확인" width="100%" />
        <CheckBox type="checkbox" />
      </StyledSignUp>
    </AuthLayout>
  );
};

export default SignUp;

const StyledSignUp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckBox = styled.input``;

"use client";

import AppLayout from "@/layouts/AppLayout";
import FormLayout from "@/layouts/FormLayout";
import initMockAPI from "@/mocks";
import styled from "styled-components";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

const Form = () => {
  return (
    <AppLayout>
      {/* Progress bar 부분 */}
      <FormLayout title="지원자 정보">
        <StyledMain>
          {/* Input 부분 */}
        </StyledMain>
      </FormLayout> 
    </AppLayout>
  );
};

export default Form;

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7% 4%;
  width: 100%;
  height: 100%;
`;
"use client";

import ButtonInput from "@/components/Common/Input/buttoninput";

const Home = () => {
  return (
    <div>
      <ButtonInput
        desc="as"
        buttonText="인증하기"
        buttonClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Home;

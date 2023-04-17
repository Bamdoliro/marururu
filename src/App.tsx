import Button from "components/common/Button";
import Icon from "assets/add.svg";
import React from "react";

const App = () => {
  return (
    <Button option="PRIMARY" icon={Icon}>
      회원가입
    </Button>
  );
};

export default App;

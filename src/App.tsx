import React from "react";
import Button from "./components/common/Button/index";

const App = () => {
  return (
    <div>
      <Button
        onClick={() => console.log("hi")}
        value="회원가입"
        option="FILLED"
        width="88px"
      />
    </div>
  )
};

export default App;

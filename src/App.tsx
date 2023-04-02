import React from "react";
import Button from "./components/common/Button/index";
import add from "./assets/add.svg";

const App = () => {
  return (
    <div>
      <Button
        onClick={() => console.log("hi")}
        value="삭제"
        option="DELETE"
        color="red"
        icon={null}
      />
    </div>
  )
};

export default App;

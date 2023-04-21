import LabelInput from "components/common/LabelInput";
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  return <div>
    <LabelInput
      desc="이메일"
      placeholder="example@gmail.com"
      name="email"
      value={value}
      onChange={(e) => setValue(Object(e.target).value)}
      buttonText="검색"
    />
  </div>;
};

export default App;

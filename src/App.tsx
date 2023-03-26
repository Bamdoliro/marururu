import Tooltip from "components/common/Tooltip";
import React from "react";

const App = () => {
  return (
    <div>
      <Tooltip message="이" position="top-left">
        <div>
          <div style={{ fontSize: 20 }}>검색</div>
        </div>
      </Tooltip>
      <div>asDF</div>
    </div>
  );
};

export default App;

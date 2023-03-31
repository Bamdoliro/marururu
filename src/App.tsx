import MiniTooltip from "components/common/MiniTooltip";
import Tooltip from "components/common/Tooltip";
import React from "react";

const App = () => {
  return (
    <div>
      <Tooltip message="이것은 상자입니다. 히히 😁😁😁😁😁" top start>
        📦📦📦
      </Tooltip>
    </div>
  );
};

export default App;

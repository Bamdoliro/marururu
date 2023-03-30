import MiniTooltip from "components/common/MiniTooltip";
import React from "react";

const App = () => {
  return (
    <div>
      <MiniTooltip message="이것은 상자입니다. 히히 😁😁😁😁😁" top>
        <span style={{ fontSize: 46 }}>📦</span>
      </MiniTooltip>
    </div>
  );
};

export default App;

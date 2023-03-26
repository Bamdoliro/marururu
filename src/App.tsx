import MiniTooltip from "components/common/MiniTooltip";
import React from "react";

const App = () => {
  return (
    <div>
      <MiniTooltip message="텍스트" position="top-right">
        <div style={{ fontSize: 20 }}>검색</div>
      </MiniTooltip>
    </div>
  );
};

export default App;

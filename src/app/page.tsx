"use client";

import DropDownMenu from "@/components/common/DropDownMenu/dropDownMenu";

const Home = () => {
  return <div>
    <DropDownMenu label="라벨" width="320px" dropdownMenuDatas={[{dropdownItemText: "옵션"},{dropdownItemText: "옵션2"}]}/>
  </div>;
};

export default Home;

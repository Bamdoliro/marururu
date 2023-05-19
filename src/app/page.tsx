"use client";

import DropDownMenu from "@/components/common/DropDownMenu/dropDownMenu";
import Column from "@/components/common/Flex/column";
import AppLayout from "@/layouts/AppLayout";

const Home = () => {
  return ( 
    <Column gap="8px">
      <DropDownMenu label="라벨" width="320px" dropdownMenuDatas={[{dropdownItemText: "옵션"},{dropdownItemText: "옵션2"}]}/>
      <DropDownMenu label="라벨" width="320px" dropdownMenuDatas={[{dropdownItemText: "옵션"},{dropdownItemText: "옵션2"}]}/>
      <DropDownMenu label="라벨" width="320px" dropdownMenuDatas={[{dropdownItemText: "옵션"},{dropdownItemText: "옵션2"}]}/>
    </Column>
    );
};

export default Home;

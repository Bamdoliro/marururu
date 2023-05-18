"use client";

import DropDownMenu from "@/components/common/DropDownMenu/dropDownMenu";
import AppLayout from "@/layouts/AppLayout";

const Home = () => {
  return ( 
    <AppLayout>
      home이다
      <DropDownMenu label="라벨" width="320px" dropdownMenuDatas={[{dropdownItemText: "옵션"},{dropdownItemText: "옵션2"}]}/>
    </AppLayout>
    );
};

export default Home;

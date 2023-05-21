"use client";

import DropdownMenu from "@/components/common/DropdownMenu/dropdownMenu";
import Column from "@/components/common/Flex/column";
import AppLayout from "@/layouts/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <Column gap="0px">
        <DropdownMenu
          desc="옵션"
          dropdownMenuData={[
            { dropdownItemText: "옵션1" },
            { dropdownItemText: "옵션2" },
            { dropdownItemText: "옵션3" },
          ]}
        />
        <DropdownMenu
          desc="옵션"
          dropdownMenuData={[
            { dropdownItemText: "옵션1" },
            { dropdownItemText: "옵션2" },
            { dropdownItemText: "옵션3" },
          ]}
        />
        <DropdownMenu
          desc="옵션"
          dropdownMenuData={[
            { dropdownItemText: "옵션1" },
            { dropdownItemText: "옵션2" },
            { dropdownItemText: "옵션3" },
          ]}
        />
        <DropdownMenu
          desc="옵션"
          dropdownMenuData={[
            { dropdownItemText: "옵션1" },
            { dropdownItemText: "옵션2" },
            { dropdownItemText: "옵션3" },
          ]}
        />
      </Column>
    </AppLayout>
  );
};

export default Home;

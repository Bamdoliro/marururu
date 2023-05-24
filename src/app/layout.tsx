import { ReactNode } from "react";
import "@/styles/global.css";
import Provider from "@/utils/provider";

export const metadata = {
  title: "마루",
  description: "부산소프트웨어마이스터고등학교 입학전형 시스템 마루입니다",
};

interface PropsType {
  children: ReactNode;
}

const RootLayout = ({ children }: PropsType) => {
  const isServer = process.browser ? false : true;

  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    import("../mocks");
  }

  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;

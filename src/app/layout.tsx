import { ReactNode } from "react";

export const metadata = {
  title: "마루",
  description: "부산소프트웨어마이스터고등학교 입학전형 시스템 마루입니다",
};

interface PropsInterface {
  children: ReactNode;
}

const RootLayout = ({ children }: PropsInterface) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

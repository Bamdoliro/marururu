import React from "react";
import * as S from "./style";

interface PropsType {
  src: string;
  onClick?: () => void;
}

const Icon = ({ src, onClick }: PropsType) => {
  return <S.Icon src={src} onClick={onClick} cursor={onClick ? true : false} />;
};

export default Icon;

import * as S from "./style";

interface PropsType {
  src: string;
  size?: number;
}

const Icon = ({ src, size }: PropsType) => {
  return <S.Icon src={src} style={{ width: size, height: size }} />;
};

export default Icon;

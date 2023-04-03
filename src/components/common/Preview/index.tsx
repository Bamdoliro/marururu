import Visibility from "assets/visibility.svg";
import VisibilityOff from "assets/visibility_off.svg";
import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface PropsType {
  setPreview: Dispatch<SetStateAction<boolean>>;
  preview: boolean;
}

const Preview = ({ setPreview, preview }: PropsType) => {
  return preview ? (
    <S.Img src={Visibility} onClick={() => setPreview(false)} />
  ) : (
    <S.Img src={VisibilityOff} onClick={() => setPreview(true)} />
  );
};
export default Preview;

import Visibility from "assets/visibility.svg";
import VisibilityOff from "assets/visibility_off.svg";
import { Dispatch, SetStateAction } from "react";
import Icon from "components/common/Icon";

interface PropsType {
  setPreview: Dispatch<SetStateAction<boolean>>;
  preview: boolean;
}

const Preview = ({ setPreview, preview }: PropsType) => {
  return preview ? (
    <Icon src={Visibility} onClick={() => setPreview(false)} />
  ) : (
    <Icon src={VisibilityOff} onClick={() => setPreview(true)} />
  );
};

export default Preview;

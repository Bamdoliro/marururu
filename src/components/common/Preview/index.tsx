import VisibilityIcon from "assets/visibility.svg";
import VisibilityOffIcon from "assets/visibility_off.svg";
import { Dispatch, SetStateAction } from "react";
import Icon from "components/common/Icon";

interface PropsType {
  setPreview: Dispatch<SetStateAction<boolean>>;
  preview: boolean;
}

const Preview = ({ setPreview, preview }: PropsType) => {
  return preview ? (
    <Icon src={VisibilityIcon} onClick={() => setPreview(false)} />
  ) : (
    <Icon src={VisibilityOffIcon} onClick={() => setPreview(true)} />
  );
};

export default Preview;

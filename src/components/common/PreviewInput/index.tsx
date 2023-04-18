import React, { useState } from "react";
import Preview from "components/common/Preview";
import * as S from "./style";
import { InputPropsType } from "types/common/input.type";

const PreviewInput = ({
  width = "360px",
  onChange,
  placeholder,
  name,
  value,
}: InputPropsType) => {
  const [preview, setPreview] = useState(false);

  return (
    <S.PreviewInput style={{ width }}>
      <S.Input
        onChange={onChange}
        placeholder={placeholder}
        type={preview ? "text" : "password"}
        name={name}
        value={value}
      />
      <Preview preview={preview} setPreview={setPreview} />
    </S.PreviewInput>
  );
};

export default PreviewInput;

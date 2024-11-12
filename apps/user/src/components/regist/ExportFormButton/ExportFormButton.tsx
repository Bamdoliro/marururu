import { color, font } from '@maru/design-token';
import { styled } from 'styled-components';

const ExportFormButton = () => {
  return (
    <ExportButton
      onClick={() => {
        alert('다운로드됨');
      }}
    >
      [ 입학 등록원 & 금연 동의서 PDF 다운로드 ]
    </ExportButton>
  );
};

export default ExportFormButton;

const ExportButton = styled.button`
  align-self: flex-start;
  ${font.btn2};
  color: ${color.gray500};
`;

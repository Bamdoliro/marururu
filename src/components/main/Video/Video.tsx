import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../../common/Flex/column";

interface PropsType {
  year: number;
}

const Video = ({ year }: PropsType) => {
  return (
    <StyledVideo>
      <Title>{year}년 입학 안내 영상</Title>
      <VideoBox>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/qkDBUiAV_Pk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </VideoBox>
    </StyledVideo>
  );
};

export default Video;

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  max-width: 703px;
  aspect-ratio: 703 / 451;
`;

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

const VideoBox = styled.div`
  width: 100%;
  aspect-ratio: 703 / 401;
`;

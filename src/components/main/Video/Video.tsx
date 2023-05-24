import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../../common/Flex/column";

interface propstype {
    title: string;
    url: string;
}

const Video = ({title, url}: propstype) => {
    return (
        <StyledVideo>
             <Title>{title}</Title>
             <VideoContainer>
             <iframe 
                width="100%" height="89%" 
                src="https://www.youtube.com/embed/qkDBUiAV_Pk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
             </iframe>
             </VideoContainer>
        </StyledVideo>
    )
}

export default Video;

const StyledVideo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 701px;
    height: 451px;
    overflow: auto;
`

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 89%;
    border-radius: 16px;
`
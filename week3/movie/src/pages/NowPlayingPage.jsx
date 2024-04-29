import ListMovie from "../components/list/list-movie";
import styled from "styled-components";

const NowPlayingContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 6vw);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NowPlayingPage = () => {
    return (
        <NowPlayingContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/now_playing?language=ko"/>
        </NowPlayingContainer>
    )
}

export default NowPlayingPage;
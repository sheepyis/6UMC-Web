import ListMovie from "../components/list/list-movie";
import styled from "styled-components";

const TopRatedContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 6vw);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopRatedPage = () => {
    return (
        <TopRatedContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/top_rated"/>
        </TopRatedContainer>
    )
}

export default TopRatedPage;
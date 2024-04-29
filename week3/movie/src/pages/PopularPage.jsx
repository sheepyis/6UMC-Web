import ListMovie from "../components/list/list-movie";
import styled from "styled-components";

const PopularContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 6vw);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PopularPage = () => {
    return (
        <PopularContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/popular?language=ko"/>
        </PopularContainer>
    )
}

export default PopularPage;
import ListMovie from "../components/list/list-movie";
import styled from "styled-components";

const UpComingContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 6vw);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UpComingPage = () => {
    return (
        <UpComingContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/upcoming"/>
        </UpComingContainer>
    )
}

export default UpComingPage;
import ListPopular from "../components/PopularPage/list/list-popular";
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
            <ListPopular/>
        </PopularContainer>
    )
}

export default PopularPage;
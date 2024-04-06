import ItemMovie from "../listItem/item-movie";
import styled from "styled-components";

const MovieContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`

const ListMovie = ({ data }) => {
    const movies = data.results

    return (
        <MovieContainer>
            {movies.map((item) => (
                <ItemMovie 
                    key={item.id} 
                    id={item.id}
                    poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title}
                    rating={item.vote_average}
                    overview={item.overview}
                />
            ))}
        </MovieContainer>
    );
};

export default ListMovie;

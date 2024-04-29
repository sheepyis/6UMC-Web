import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ItemPopular from "../listItem/item-popular";

const PopularContainer = styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`;

const ListPopular = () => {
    const [movies, setMovies] = useState([]);
    const accessToken = import.meta.env.VITE_API_ACCESS;

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular?language=ko', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <PopularContainer>
            {movies.map((item) => (
                <ItemPopular 
                    key={item.id} 
                    id={item.id}
                    poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title}
                    rating={item.vote_average.toFixed(1)}
                    overview={item.overview}
                />
            ))}
        </PopularContainer>
    );
};

export default ListPopular;

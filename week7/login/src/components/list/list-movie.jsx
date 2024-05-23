import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import ItemMovie from "../listItem/item-movie";

const Container = styled.div`
    width: 65%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const ListMovie = ({ Url, currentPage }) => {
    const [movies, setMovies] = useState([]);
    const accessToken = import.meta.env.VITE_API_ACCESS;

    useEffect(() => {
        const options = {
            method: 'GET',
            url: Url,
            params: { language: 'ko', page: `${currentPage}` },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        };

        axios.request(options)
            .then(response => {
                setMovies(response.data.results);
                console.log(response.data.results);
        })
            .catch(err => console.error(err));
    }, [Url, currentPage]);

    return (
        <Container>
            {movies.map((item) => (
                <ItemMovie 
                    key={item.id} 
                    id={item.id}
                    poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title}
                    original_title={item.original_title}
                    release_date={item.release_date}
                    rating={item.vote_average.toFixed(1)}
                    overview={item.overview}
                />
            ))}
        </Container>
    );
};

export default ListMovie;

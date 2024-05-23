import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const PaginationContainer = styled.div`
    width: 7vw;
    height: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5vw 0;
`

const PaginationP = styled.p`
    color: white;
    font-size: 1vw;
    font-weight: bold;
`

const Pagination = ({ Url, onPageChange }) => {
    const accessToken = import.meta.env.VITE_API_ACCESS;

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: Url,
            params: { language: 'ko', page: currentPage },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        };

        axios.request(options)
            .then(response => {
                const totalPages = response.data.total_pages;
                setTotalPages(totalPages);
        })
            .catch(err => console.error("Error: ", err));
    }, [Url, currentPage]);

    const goToPreviousPage = () => {
        const newPage = Math.max(currentPage - 1, 1);
        setCurrentPage(newPage);
        onPageChange(newPage);
    };

    const goToNextPage = () => {
        const newPage = Math.min(currentPage + 1, totalPages);
        setCurrentPage(newPage);
        onPageChange(newPage);
    };

    return (
        <PaginationContainer>
            <PaginationP onClick={goToPreviousPage} style={{ color: currentPage === 1 ? '#BAB4B4' : 'white', cursor: "pointer" }}>{'<'}</PaginationP>
            <PaginationP>{currentPage}</PaginationP>
            <PaginationP onClick={goToNextPage} style={{ color: currentPage === totalPages ? '#BAB4B4' : 'white', cursor: "pointer" }}>{'>'}</PaginationP>
        </PaginationContainer>
    );
}

export default Pagination;

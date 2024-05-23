import React, { useState, useEffect } from "react";
import ListMovie from "../components/list/list-movie";
import PageContainer from "../styles/PageStyle";
import Pagination from "../components/PopularPage/Pagination";

const PopularPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);

    return (
        <PageContainer>
            <ListMovie Url="https://api.themoviedb.org/3/movie/popular" currentPage={currentPage}/>
            <Pagination Url="https://api.themoviedb.org/3/movie/popular" onPageChange={handlePageChange}/>
        </PageContainer>
    )
}

export default PopularPage;
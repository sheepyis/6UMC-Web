import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavContainer = styled.div`
    width: 100%;
    height: 4vw;
    background-color: #040E40;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavContainer2 = styled.div`
    width: 93%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavPContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavP = styled(Link)`
    font-size: 1vw;
    font-weight: bold;
    color: ${({ isActive }) => isActive ? "#FFCC15" : "white"};
    cursor: pointer;

    &:hover {
        color: #FFCC15;
        font-size: 1.1vw;
    }
`

const Navbar = () => {
    const location = useLocation();

    return (
        <NavContainer>
            <NavContainer2>
                <NavP to="/">UMC Movie</NavP>
                <NavPContainer>
                    <NavP to="/signup" isActive={location.pathname === "/signup"}>회원가입</NavP>
                    <NavP to="/popular" isActive={location.pathname === "/popular"}>Popular</NavP>
                    <NavP to="/now" isActive={location.pathname === "/now"}>Now Playing</NavP>
                    <NavP to="/top" isActive={location.pathname === "/top"}>Top Rated</NavP>
                    <NavP to="/up" isActive={location.pathname === "/up"}>Upcoming</NavP>
                </NavPContainer>
            </NavContainer2>
        </NavContainer>
    )
}

export default Navbar;

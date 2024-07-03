import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import Navbar2Menu from "./Navbar2Menu";
import ShareKakao from "../../api/ShareKakao";
import axios from "axios";
import { getRedirectURI } from "../../api/RedirectURI";

const NavContainer = styled.div`
    width: 100%;
    height: 4vw;
    background-color: #040E40;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const NavContainer2 = styled.div`
    width: 93%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavP = styled(NavLink)`
    font-size: 1vw;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        color: #FFCC15;
        font-size: 1.1vw;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: cneter;
    gap: 0.5vw;
`

const Navbar2 = () => {
    const location = useLocation();
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const handleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLogin(!!token);
    }, []);

    const handleLogout = async () => {
        const client_id = import.meta.env.VITE_KAKAO_REST_API;
        const logout_redirect_uri = getRedirectURI();
        const kakaoLogoutURL = `https://kauth.kakao.com/oauth/logout?client_id=${client_id}&logout_redirect_uri=${logout_redirect_uri}`;

        try {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            setIsLogin(false);
            window.location.href = kakaoLogoutURL;
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <NavContainer>
            <NavContainer2>
                <LogoContainer>
                    <NavP to="/">UMC Movie</NavP>
                    <ShareKakao/>
                </LogoContainer>
                <NavP as="div" style={{fontSize: "1.5vw"}} onClick={handleMenu}>
                    <FiMenu />
                </NavP>
            </NavContainer2>
            <Navbar2Menu handleMenu={handleMenu} menuVisible={menuVisible} isLogin={isLogin} handleLogout={handleLogout}/>
        </NavContainer>
    );
};

export default Navbar2;

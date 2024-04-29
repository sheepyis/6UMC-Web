import styled from "styled-components";
import { Link } from "react-router-dom";

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
    color: white;
    cursor: pointer;

    &:hover {
        color: #FFCC15;
        font-size: 1.1vw;
    }
`

const Navbar = () => {
    return (
        <NavContainer>
            <NavContainer2>
                <NavP to="/">UMC Movie</NavP>
                <NavPContainer>
                    <NavP to="/signup">회원가입</NavP>
                    <NavP to="/popular">Popular</NavP>
                    <NavP to="/now">Now Playing</NavP>
                    <NavP to="/top">Top Rated</NavP>
                    <NavP to="/up">Upcoming</NavP>
                </NavPContainer>
            </NavContainer2>
        </NavContainer>
    )
}

export default Navbar;
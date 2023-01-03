import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: teal;
    text-align: center;
`;

export const StyledUl = styled.ul` 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
`;

export const StyledLi = styled.li`
    margin: 0px 20px;
`;

export const StyledNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    &.active {
        background-color: white;
        color: ${({ theme }) => theme.color.teal};
        padding: 5px;
        border-radius: 5px;
        };

`

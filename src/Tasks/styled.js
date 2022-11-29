import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 10px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap:20px;
    padding: 10px;
    border-bottom: 2px solid hsl(0deg 0% 90%);
    align-items: center;

    ${({hidden}) => hidden && css`
        display: none;
    `} 
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration-line: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    transition: 1s;
    padding: 0px;
    cursor: pointer;

    ${({toogleDone}) => toogleDone && css`
        background-color: hsl(120, 100%, 30%);
        color: white;
        border: none;

        &:hover {
            background-color: hsl(120, 100%, 35%)
        }

        &:active {
            background-color: hsl(120, 100%, 40%)
        }
    `}

    ${({remove}) => remove && css`
        background-color: hsl(0, 100%, 40%);
        border: none;

        &:hover {
            background-color: hsl(0, 100%, 45%);
        }

        &:active {
            background-color: hsl(0, 100%, 50%);
        }
    `}
`;
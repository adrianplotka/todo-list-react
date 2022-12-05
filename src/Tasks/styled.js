import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 10px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap:20px;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.mercury};
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
        background-color: ${({ theme }) => theme.color.green};
        color: ${({ theme }) => theme.color.white};
        border: none;

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: ${({ theme }) => theme.color.red};
        border: none;

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
    `}
`;
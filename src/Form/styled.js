import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
    display: flex;
    gap: 15px;
    justify-content: space-between;

    @media(max-width:767px) {
        flex-direction: column;
    }
`;

export const Text = styled.input`
    width: 82%;
    border-color: hsl(0deg 0% 90%);
    border: 2px solid #dad5d5;
    padding-left: 10px;

    @media(max-width:767px) {
        width: 100%;
        height: 40px;
    }
`;

export const Button = styled.button`
    width: 17%;
    height: 40px;
    background-color: teal;
    color: white;
    border: 2px solid teal;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.05);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }

    @media(max-width:767px) {
        width: 100%;
        gap: 20px;
        height: 40px;
    }
    
`;
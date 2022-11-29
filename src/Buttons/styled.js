import styled from "styled-components"; 

export const InteractiveButtons = styled.div`
    display: flex;
    flex-wrap:wrap; 
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: hsl(180, 100%, 30%);
    padding: 15px;
    transition: 1s;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: rgb(170, 163, 163);
    }

    @media(max-width:767px) {
       display: flex;
       width: 100%;
       justify-content: center
    }
`;
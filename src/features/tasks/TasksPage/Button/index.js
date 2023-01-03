import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0 0 0 20px;
    transition: color 1s;
    
    &:hover {
        filter: brightness(120%);
    }
    &:active {
        filter: brightness(140%);
    }
    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;
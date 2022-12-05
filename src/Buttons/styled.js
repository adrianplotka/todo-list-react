import styled from "styled-components"; 

export const InteractiveButtons = styled.div`
    display: flex;
    flex-wrap:wrap; 
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.teal};
    padding: 15px;
    transition: 1s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver}
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
       display: flex;
       width: 100%;
       justify-content: center
    }
`;
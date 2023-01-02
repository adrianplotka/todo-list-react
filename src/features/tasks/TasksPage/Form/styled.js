import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    gap: 15px;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    width: 17%;
    height: 40px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: 2px solid${({ theme }) => theme.color.teal};
    cursor: pointer;
    transition: 1s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.05);
    }

    &:active {
        filter: brightness(120%);
    }

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        gap: 20px;
        height: 40px;
    }
`;
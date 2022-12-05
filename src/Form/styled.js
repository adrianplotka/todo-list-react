import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
    display: flex;
    gap: 15px;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const Text = styled.input`
    width: 82%;
    border: 2px solid ${({ theme }) => theme.color.SwissCoffee};
    padding-left: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        height: 40px;
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
import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin-bottom: 15px;
`;

export const StyledHeader = styled.header`
    padding-left: 20px;
    display: grid;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.color.mercury};
    grid-template-columns: 1fr auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 100% ;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
`;

export const StyledBody = styled.div`
    padding: 20px;
`
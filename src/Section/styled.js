import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin-bottom: 15px;
`;

export const StyledHeader = styled.header`
    display: grid;
    align-items: center;
    border-bottom: 2px solid hsl(0deg 0% 90%);
    grid-template-columns: 1fr auto;

    @media(max-width:767px) {
        grid-template-columns: 100% ;
    }
`;

export const StyledTitle = styled.h2`
    padding: 15px 20px;
    font-size: 20px;
`;

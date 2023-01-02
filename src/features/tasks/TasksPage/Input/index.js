import styled from "styled-components";

export default styled.input`
    padding: 10px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.color.SwissCoffee};
    

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        height: 40px;
    }
`;
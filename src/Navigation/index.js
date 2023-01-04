import { StyledLi, StyledUl, StyledNavLink, StyledNav } from "./styled"


export default () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to="/autorPage">O autorze</StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
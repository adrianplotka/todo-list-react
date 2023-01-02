import { StyledSection, StyledHeader, StyledTitle, StyledBody } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
      <StyledSection>
        <StyledHeader>
          <StyledTitle>{title}</StyledTitle>
          {extraHeaderContent}
        </StyledHeader>
        <StyledBody>
        {body}
        </StyledBody>
      </StyledSection>
);

export default Section;
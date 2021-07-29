import { StyledSection, StyledSectionHeader, StyledSectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledSectionHeader>
            <StyledSectionTitle >{title}</StyledSectionTitle>
            {extraHeaderContent}
        </StyledSectionHeader>
        {body}
    </StyledSection>
);

export default Section;
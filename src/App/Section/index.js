import { StyledSection, SubHeader, SubTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SubHeader>
            <SubTitle >{title}</SubTitle>
            {extraHeaderContent}
        </SubHeader>
        {body}
    </StyledSection>
);

export default Section;
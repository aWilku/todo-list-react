import { StyledHeader, StyledTitle } from "./styled";

const Header = ({ title }) => (
    <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
);

export default Header;
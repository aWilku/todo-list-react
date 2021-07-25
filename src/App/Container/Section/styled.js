import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #ffffff;
    margin: 0 auto 10px;
`;

export const StyledSectionHeader = styled.header`
    display: grid;
    grid-template-columns: 2fr auto auto;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        grid-template-columns: 1fr;   
    }
`;

export const StyledSectionTitle = styled.h2`
    padding: 20px;
    margin: 0;
    align-items: center;
    font-size: 20px;
`;
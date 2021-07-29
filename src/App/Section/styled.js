import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 0 auto 10px;
`;

export const SubHeader = styled.header`
    display: grid;
    grid-template-columns: 2fr auto auto;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        grid-template-columns: 1fr;   
    }
`;

export const SubTitle = styled.h2`
    padding: 20px;
    margin: 0;
    align-items: center;
    font-size: 20px;
`;
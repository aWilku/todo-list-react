import styled from "styled-components"

export const StyledButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    margin: 15px;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        grid-template-columns: 1fr;
        margin: 25px;
    }
`;

export const StyledButton = styled.button`
    border: none;
    color: hsl(180, 100%, 20%);
    background-color: transparent;
    transition: 1s;

    &:hover{
        color: hsl(180, 100%, 40%);
        cursor: pointer;
    }

    &:active{
        color: hsl(180, 100%, 50%);
    }

    &:disabled{
        color: hsl(0, 0%, 70%);
        cursor: not-allowed;
    }
`;
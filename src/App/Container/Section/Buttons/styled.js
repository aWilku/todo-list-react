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
    color: ${({ theme }) => theme.colors.buttonColors.teal.basic};
    background-color: transparent;
    transition: 1s;

    &:hover{
        color: ${({ theme }) => theme.colors.buttonColors.teal.hover};
        cursor: pointer;
    }

    &:active{
        color: ${({ theme }) => theme.colors.buttonColors.teal.activ};
    }

    &:disabled{
        color: ${({ theme }) => theme.colors.buttonColors.disabled};
        cursor: not-allowed;
    }
`;
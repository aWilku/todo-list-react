import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    padding: 10px;
    border-top: 1px solid ${({ theme }) => theme.colors.silver};

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        flex-direction: column;
    }
`;

export const StyledInput = styled.input`
    flex-grow: 1;
    padding: 10px;
    margin: 10px;
    border: 1px solid ${({ theme }) => theme.colors.silver};

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        margin: 10px 10px 0;
    }
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    margin: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.buttonColors.teal.basic};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.5s;

    &:hover{
        background-color: ${({ theme }) => theme.colors.buttonColors.teal.hover};
        cursor: pointer;
        transform: scale(1.1)
    }

    &:active{
        background-color: ${({ theme }) => theme.colors.buttonColors.teal.activ};
    }
`;
import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    padding: 10px;
    border-top: 1px solid #dddddd;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        flex-direction: column;
    }
`;

export const StyledInput = styled.input`
    flex-grow: 1;
    padding: 10px;
    margin: 10px;
    border: 1px solid #dddddd;

    @media(max-width: ${({ theme }) => theme.breakpoint}px){
        margin: 10px 10px 0;
    }
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    margin: 10px;
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: white;
    transition: 0.5s;

    &:hover{
        background-color: hsl(180, 100%, 30%);
        cursor: pointer;
        transform: scale(1.1)
    }

    &:active{
        background-color: hsl(180, 100%, 35%);
    }
`;
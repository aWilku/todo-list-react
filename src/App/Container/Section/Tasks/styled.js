import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 25px 10px;
    margin: 0 auto;
    border-top: 1px solid ${({ theme }) => theme.colors.silver};
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    align-items: center;
    grid-gap: 15px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-all;

    ${({ done }) => done && css`
        text-decoration: line-through ${({ theme }) => theme.colors.black};
    `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.white};
    border: none;
    width: 30px;
    height: 30px;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.colors.buttonColors.green.basic};

        &:hover{
            background-color: ${({ theme }) => theme.colors.buttonColors.green.hover};
            cursor: pointer;
        }

        &:active{ 
            background-color: ${({ theme }) => theme.colors.buttonColors.green.activ};
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.buttonColors.red.basic};

        &:hover{
            background-color: ${({ theme }) => theme.colors.buttonColors.red.hover};
            cursor: pointer;
        }

        &:active{
            background-color: ${({ theme }) => theme.colors.buttonColors.red.active};
        }
    `}
`;
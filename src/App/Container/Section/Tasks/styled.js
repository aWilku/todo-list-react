import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 25px 10px;
    margin: 0 auto;
    border-top: 1px solid #dddddd;
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 1px solid #dddddd;
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
        text-decoration: line-through rgb(0, 0, 0);
    `}
`;

export const Button = styled.button`
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: #008000;

        &:hover{
            background-color: #009900;
            cursor: pointer;
        }

        &:active{
            border: 2px solid #000000;
            background-color: #00b300;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: #dc143c;

        &:hover{
            background-color: #ea1f48;
            cursor: pointer;
        }

        &:active{
            border: 2px solid #000000;
            background-color: #ec365b;
        }
    `}
`;
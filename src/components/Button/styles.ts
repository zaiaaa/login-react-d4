import styled from 'styled-components';
import { IButtonStyled } from './types';


export const ButtonContainer = styled.button<IButtonStyled>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
    ${(disabled) => !disabled && 'opacity: 0.5; cursor: not-allowed;'}
`
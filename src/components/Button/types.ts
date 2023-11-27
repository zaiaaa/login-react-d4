import React from "react";

export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export interface IButtonStyled{
    isValid?: boolean
}
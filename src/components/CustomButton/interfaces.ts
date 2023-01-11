import React, { ButtonHTMLAttributes } from 'react';

export interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
}

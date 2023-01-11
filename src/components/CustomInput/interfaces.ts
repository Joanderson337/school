import  {  InputHTMLAttributes } from 'react';

export interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

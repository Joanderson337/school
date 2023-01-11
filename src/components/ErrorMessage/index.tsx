import { IErrorMessageProps } from './interfaces';
import { InputErrorMessageContainer } from './styled';


export function ErrorMessage({ children }: IErrorMessageProps) {
  return (
    <>
      <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    </>
  );
}

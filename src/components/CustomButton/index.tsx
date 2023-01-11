/* eslint-disable react/react-in-jsx-scope */
import { ICustomButtonProps } from './interfaces';
import { CustomButtonContainer, IconContainer } from './styled';

export function CustomButton({
  startIcon,
  children,
  ...rest
}: ICustomButtonProps) {
  return (
    <>
      <CustomButtonContainer {...rest}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        {children}
      </CustomButtonContainer>
    </>
  );
}

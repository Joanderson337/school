import React, { FunctionComponent } from 'react';
import { ICustomInputProps } from './interfaces';

import { CustomInputContainer } from './styled';


export const CustomInput: FunctionComponent<ICustomInputProps> =
  React.forwardRef((props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />;
  });

CustomInput.displayName = 'CustomInput';

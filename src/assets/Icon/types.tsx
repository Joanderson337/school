import { ReactComponent as X } from './svg/close-icon.svg';
import { ReactComponent as Back } from './svg/voltar.svg';
import { ReactComponent as LogIn } from './svg/log-in.svg';


const IconsTypes = {
  x : X,
  back : Back,
  login: LogIn,
};

export default IconsTypes;

export type IconName =
  | 'x'
  | 'back'
  | 'login'





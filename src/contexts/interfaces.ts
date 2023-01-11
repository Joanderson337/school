import User from '../models/user.types';
import { ReactNode } from 'react';

export interface IUserContext {
  currentUser: User | null;
  isAuthenticated: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

export interface IUserContextProvider {
  children: ReactNode;
}


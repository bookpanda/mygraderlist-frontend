import { IUser } from '@/types/user';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface AuthContextProps {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
    user: IUser | null;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    login: () => {},
    logout: () => {},
    user: null,
});

export const useAuthContext = () => useContext(AuthContext);

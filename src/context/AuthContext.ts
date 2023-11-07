import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface AuthContextProps {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    login: () => {},
    logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

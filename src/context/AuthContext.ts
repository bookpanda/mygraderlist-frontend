import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface Footer {
    name: string;
    code: string;
    image: string;
}

export interface AuthContextProps {
    footer: Footer | null;
    setFooter: Dispatch<SetStateAction<Footer | null>>;
}

export const AuthContext = createContext<AuthContextProps>({
    footer: null,
    setFooter: () => {},
});

export const useHomeContext = () => useContext(AuthContext);

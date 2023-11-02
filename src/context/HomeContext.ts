import { createContext, useContext } from 'react';

export interface Footer {}

export interface HomeContextProps {
    footer: Footer | null;
    setFooter: (id: string) => void;
}

export const HomeContext = createContext<HomeContextProps>({
    footer: null,
    setFooter: (id: string) => {},
});

export const useAppContext = () => useContext(HomeContext);

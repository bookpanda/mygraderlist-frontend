import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface Footer {
    name: string;
    code: string;
    image: string;
}

export interface HomeContextProps {
    footer: Footer | null;
    setFooter: Dispatch<SetStateAction<Footer | null>>;
}

export const HomeContext = createContext<HomeContextProps>({
    footer: null,
    setFooter: () => {},
});

export const useHomeContext = () => useContext(HomeContext);

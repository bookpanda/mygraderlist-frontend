import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface Footer {
    name: string;
    code: string;
    image: string;
}

export interface DataContextProps {
    footer: Footer | null;
    setFooter: Dispatch<SetStateAction<Footer | null>>;
}

export const DataContext = createContext<DataContextProps>({
    footer: null,
    setFooter: () => {},
});

export const useDataContext = () => useContext(DataContext);

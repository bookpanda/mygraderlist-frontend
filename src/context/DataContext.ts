import { Course, Problem } from '@/types/problem';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface Footer {
    name: string;
    code: string;
    image: string;
}

export interface DataContextProps {
    footer: Footer | null;
    setFooter: Dispatch<SetStateAction<Footer | null>>;
    problems: Problem[] | null;
    courses: Course[] | null;
}

export const DataContext = createContext<DataContextProps>({
    footer: null,
    setFooter: () => {},
    problems: null,
    courses: null,
});

export const useDataContext = () => useContext(DataContext);

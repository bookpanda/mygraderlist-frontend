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
    currentCourse: string;
    setCurrentCourse: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<DataContextProps>({
    footer: null,
    setFooter: () => {},
    problems: null,
    courses: null,
    currentCourse: '',
    setCurrentCourse: () => {},
});

export const useDataContext = () => useContext(DataContext);

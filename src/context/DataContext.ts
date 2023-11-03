import { Course, Problem } from '@/types/problem';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface DataContextProps {
    footer: Problem | null;
    setFooter: Dispatch<SetStateAction<Problem | null>>;
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

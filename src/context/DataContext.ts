import { Course, Problem } from '@/types/problem';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface DataContextProps {
    currentProblem: Problem | null;
    setCurrentProblem: Dispatch<SetStateAction<Problem | null>>;
    problems: Problem[] | null;
    courses: Course[] | null;
    currentCourse: string;
    setCurrentCourse: Dispatch<SetStateAction<string>>;
    like: (id: number) => void;
    unlike: (id: number) => void;
}

export const DataContext = createContext<DataContextProps>({
    currentProblem: null,
    setCurrentProblem: () => {},
    problems: null,
    courses: null,
    currentCourse: '',
    setCurrentCourse: () => {},
    like: () => {},
    unlike: () => {},
});

export const useDataContext = () => useContext(DataContext);

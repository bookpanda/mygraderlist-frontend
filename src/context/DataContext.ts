import { Course, Problem } from '@/types/problem';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface DataContextProps {
    currentProblem: Problem | null;
    setCurrentProblem: Dispatch<SetStateAction<Problem | null>>;
    problems: Problem[] | null;
    courses: Course[] | null;
    currentCourse: Course | null;
    setCurrentCourse: Dispatch<SetStateAction<Course | null>>;
    like: (id: number) => void;
    unlike: (id: number) => void;
    addEmoji: (id: number, emoji: string) => void;
    removeEmoji: (id: number, emoji: string) => void;
    submitRating: (id: number, score: number, difficulty: number) => void;
}

export const DataContext = createContext<DataContextProps>({
    currentProblem: null,
    setCurrentProblem: () => {},
    problems: null,
    courses: null,
    currentCourse: {} as Course,
    setCurrentCourse: () => {},
    like: () => {},
    unlike: () => {},
    addEmoji: () => {},
    removeEmoji: () => {},
    submitRating: () => {},
});

export const useDataContext = () => useContext(DataContext);

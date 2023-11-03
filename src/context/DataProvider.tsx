'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { Footer, DataContext } from './DataContext';
import { Course, Problem } from '@/types/problem';
import problemsData from '@pubic/problems.json';
import coursesData from '@pubic/courses.json';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const [footer, setFooter] = useState<Footer | null>(null);
    const [problems, setProblems] = useState<Problem[] | null>(null);
    const [courses, setCourses] = useState<Course[] | null>(null);

    useEffect(() => {
        setProblems(problemsData);
        setCourses(coursesData);
    }, []);

    return (
        <DataContext.Provider value={{ footer, setFooter, problems, courses }}>
            {children}
        </DataContext.Provider>
    );
};

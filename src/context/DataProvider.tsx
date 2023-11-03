'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import { Course, Problem } from '@/types/problem';
import problemsData from '@pubic/problems.json';
import coursesData from '@pubic/courses.json';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const [footer, setFooter] = useState<Problem | null>(null);
    const [problems, setProblems] = useState<Problem[] | null>(null);
    const [courses, setCourses] = useState<Course[] | null>(null);
    const [currentCourse, setCurrentCourse] = useState<string>('');

    useEffect(() => {
        setProblems(problemsData);
        setCourses(coursesData);
        setCurrentCourse('2110211');
    }, []);

    return (
        <DataContext.Provider
            value={{
                footer,
                setFooter,
                problems,
                courses,
                currentCourse,
                setCurrentCourse,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

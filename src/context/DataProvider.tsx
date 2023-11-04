'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import { Course, Problem } from '@/types/problem';
import problemsData from '@pubic/problems.json';
import coursesData from '@pubic/courses.json';
import { useToast } from '@/components/ui/use-toast';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const { toast } = useToast();
    const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
    const [problems, setProblems] = useState<Problem[] | null>(null);
    const [courses, setCourses] = useState<Course[] | null>(null);
    const [currentCourse, setCurrentCourse] = useState<string>('');

    useEffect(() => {
        setProblems(problemsData);
        setCourses(coursesData);
        setCurrentCourse('2110211');
    }, []);

    const like = () => {
        if (!currentProblem || !problems) return;
        const newProblems = problems?.map((p) => {
            if (p.id === currentProblem.id) {
                return { ...p, heart: 1 };
            }
            return p;
        });
        setProblems(newProblems);
        setCurrentProblem({ ...currentProblem, heart: 1 });
        toast({
            title: 'Added to favourites',
            description: `${currentProblem.name} (${currentProblem.code})`,
        });
    };

    const unlike = () => {
        if (!currentProblem || !problems) return;
        const newProblems = problems?.map((p) => {
            if (p.id === currentProblem.id) {
                return { ...p, heart: 0 };
            }
            return p;
        });
        setProblems(newProblems);
        setCurrentProblem({ ...currentProblem, heart: 0 });
        toast({
            title: 'Removed from favourites',
            description: `${currentProblem.name} (${currentProblem.code})`,
        });
    };

    return (
        <DataContext.Provider
            value={{
                currentProblem,
                setCurrentProblem,
                problems,
                courses,
                currentCourse,
                setCurrentCourse,
                like,
                unlike,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

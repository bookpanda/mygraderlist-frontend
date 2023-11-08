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
    const [search, setSearch] = useState('');

    useEffect(() => {
        problemsData.sort((a, b) => b.id - a.id);
        setProblems(problemsData);
        setCourses(coursesData);
        setCurrentCourse('2110211');
    }, []);

    useEffect(() => {
        if (problems)
            setCurrentProblem(
                problems.find((p) => p.id === currentProblem?.id) ?? null
            );
    }, [problems, currentProblem?.id]);

    const like = (id: number) => {
        if (!currentProblem || !problems) return;
        const newProblems = problems.map((p) => {
            if (p.id === id) {
                return { ...p, heart: 1 };
            }
            return p;
        });
        setProblems(newProblems);
        toast({
            title: 'Added to favourites',
            description: `${currentProblem.name} (${currentProblem.code})`,
        });
    };

    const unlike = (id: number) => {
        if (!currentProblem || !problems) return;
        const newProblems = problems.map((p) => {
            if (p.id === id) {
                return { ...p, heart: 0 };
            }
            return p;
        });
        setProblems(newProblems);
        toast({
            title: 'Removed from favourites',
            description: `${currentProblem.name} (${currentProblem.code})`,
        });
    };

    const addEmoji = (id: number, emoji: string) => {
        if (!currentProblem || !problems) return;
        if (currentProblem.emojisSelf.includes(emoji)) return;
        if (currentProblem.emojis.length >= 10) return;
        const currentCount =
            currentProblem.emojis.find((e) => e.emoji === emoji)?.count ?? 0;
        let newEmojis = currentProblem.emojis.map((e) => {
            if (e.emoji === emoji) {
                return {
                    emoji,
                    count: currentCount + 1,
                };
            }
            return e;
        });
        if (currentCount === 0) {
            newEmojis = [
                ...newEmojis,
                {
                    emoji,
                    count: 1,
                },
            ];
        }
        const newProblems = problems.map((p) => {
            if (p.id === id) {
                return {
                    ...p,
                    emojis: newEmojis.filter((e) => e.count > 0),
                    emojisSelf: [...p.emojisSelf, emoji],
                };
            }
            return p;
        });
        setProblems(() => newProblems);
    };

    const removeEmoji = (id: number, emoji: string) => {
        if (!currentProblem || !problems) return;
        const currentCount =
            currentProblem.emojis.find((e) => e.emoji === emoji)?.count ?? 0;
        if (currentCount === 0) return;
        const newEmojis = currentProblem.emojis.map((e) => {
            if (e.emoji === emoji) {
                return {
                    emoji,
                    count: currentCount - 1,
                };
            }
            return e;
        });
        const newProblems = problems.map((p) => {
            if (p.id === id) {
                return {
                    ...p,
                    emojis: newEmojis.filter((e) => e.count > 0),
                    emojisSelf: p.emojisSelf.filter((e) => e !== emoji),
                };
            }
            return p;
        });
        setProblems(() => newProblems);
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
                addEmoji,
                removeEmoji,
                search,
                setSearch,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import { Problem } from '@/types/problem';
import { useToast } from '@/components/ui/use-toast';
import { calculateRating } from '@/utils/calculateRating';
import { getAllProblems } from '@/api/problem';
import { getAllCourses } from '@/api/course';
import { getUserLikes } from '@/api/like';
import { getAllRatings, getUserRatings } from '@/api/rating';
import { getAllEmojis, getUserEmojis } from '@/api/emoji';
import { Course } from '@/types/course';
import { sortCourses } from '@/utils/sortCourses';
import { accumProblems } from '@/utils/accumProblems';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const { toast } = useToast();
    const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
    const [problems, setProblems] = useState<Problem[] | null>(null);
    const [courses, setCourses] = useState<Course[] | null>(null);
    const [currentCourse, setCurrentCourse] = useState<Course | null>(null);

    useEffect(() => {
        async function fetchData() {
            const resCourses = await getAllCourses();
            const resProblems = await getAllProblems();
            const resRatings = await getAllRatings();
            const resUserRatings = await getUserRatings();
            const resEmojis = await getAllEmojis();
            const resUserEmojis = await getUserEmojis();
            const resUserLikes = await getUserLikes();

            const problemsData = accumProblems(
                resProblems,
                resRatings,
                resUserRatings,
                resEmojis,
                resUserEmojis,
                resUserLikes
            );
            problemsData.sort((a, b) => b.order - a.order);
            setProblems(problemsData);
            sortCourses(resCourses);
            setCourses(resCourses);
            if (resCourses) setCurrentCourse(resCourses[1]);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (problems)
            setCurrentProblem(
                problems.find((p) => p.id === currentProblem?.id) ?? null
            );
    }, [problems, currentProblem?.id]);

    const like = (id: string) => {
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

    const unlike = (id: string) => {
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

    const addEmoji = (id: string, emoji: string) => {
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

    const removeEmoji = (id: string, emoji: string) => {
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

    const submitRating = (id: string, score: number, difficulty: number) => {
        if (!currentProblem || !problems) return;
        const newProblems = problems.map((p) => {
            if (p.id === id) {
                const { newScore, newNumScore, newDiff, newNumDiff } =
                    calculateRating(p, score, difficulty);

                return {
                    ...p,
                    score: newScore,
                    numScore: newNumScore,
                    difficulty: newDiff,
                    numDifficulty: newNumDiff,
                    scoreSelf: score,
                    difficultySelf: difficulty,
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
                submitRating,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

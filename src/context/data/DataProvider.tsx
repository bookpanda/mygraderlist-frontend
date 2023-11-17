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
import { deleteEmoji, getAllEmojis, getUserEmojis } from '@/api/emoji';
import { Course } from '@/types/course';
import { sortCourses } from '@/utils/sortCourses';
import { accumProblems } from '@/utils/accumProblems';
import { useAuthContext } from '../AuthContext';
import { handleCreateLike, handleDeleteLike } from './like';
import { handleCreateEmoji, handleDeleteEmoji } from './emoji';
import { handleRating } from './rating';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const { toast } = useToast();
    const { user, login } = useAuthContext();
    const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
    const [problems, setProblems] = useState<Problem[] | null>(null);
    const [courses, setCourses] = useState<Course[] | null>(null);
    const [currentCourse, setCurrentCourse] = useState<Course | null>(null);

    const fetchData = async () => {
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
    };

    useEffect(() => {
        fetchData();
    }, []);

    const clearAuthData = () => {
        if (!problems) return;
        setProblems(() =>
            problems.map((p) => ({
                ...p,
                heart: undefined,
                ratingId: undefined,
                emojisSelf: [],
                scoreSelf: 0,
                difficultySelf: 0,
            }))
        );
    };

    useEffect(() => {
        if (problems)
            setCurrentProblem(
                problems.find((p) => p.id === currentProblem?.id) ?? null
            );
    }, [problems, currentProblem?.id]);

    const like = async (problemId: string) => {
        if (!currentProblem || !problems) return;
        if (!user) {
            login();
            return;
        }

        const newProblems = await handleCreateLike(problemId, user, problems);
        setProblems(newProblems);
        toast({
            title: 'Added to favourites',
            description: `${currentProblem.name} (${currentProblem.code})`,
        });
    };

    const unlike = async (problemId: string) => {
        if (!currentProblem || !problems) return;
        if (!user) {
            login();
            return;
        }

        const newProblems = await handleDeleteLike(problemId, problems);
        setProblems(newProblems);
        toast({
            title: 'Removed from favourites',
            description: `${currentProblem.name} (${currentProblem.code})`,
        });
    };

    const addEmoji = async (problemId: string, emoji: string) => {
        if (!currentProblem || !problems) return;
        if (currentProblem.emojisSelf.find((eS) => eS.emoji === emoji)) return;
        if (currentProblem.emojis.length >= 10) return;
        if (!user) {
            login();
            return;
        }

        const newProblems = await handleCreateEmoji(
            emoji,
            problemId,
            user,
            problems,
            currentProblem
        );
        setProblems(() => newProblems);
    };

    const removeEmoji = async (problemId: string, emoji: string) => {
        if (!currentProblem || !problems) return;
        if (!user) {
            login();
            return;
        }

        const newProblems = await handleDeleteEmoji(
            emoji,
            problemId,
            problems,
            currentProblem
        );
        setProblems(() => newProblems);
    };

    const submitRating = async (
        id: string,
        score: number,
        difficulty: number
    ) => {
        if (!currentProblem || !problems) return;
        if (!user) {
            login();
            return;
        }

        const newProblems = await handleRating(
            id,
            user,
            score,
            difficulty,
            problems
        );
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
                fetchData,
                clearAuthData,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

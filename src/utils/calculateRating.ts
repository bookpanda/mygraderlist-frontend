import { Problem } from '@/types/problem';

export const calculateRating = (
    p: Problem,
    score: number,
    difficulty: number
) => {
    const newNumScore = p.scoreSelf === 0 ? p.numScore + 1 : p.numScore;
    const newScore =
        (p.scoreSelf === 0
            ? p.score * p.numScore + score
            : p.score * p.numScore - p.scoreSelf + score) / newNumScore;
    const newNumDiff =
        p.difficultySelf === 0 ? p.numDifficulty + 1 : p.numDifficulty;
    const newDiff =
        (p.difficultySelf === 0
            ? p.difficulty * p.numDifficulty + difficulty
            : p.difficulty * p.numDifficulty - p.difficultySelf + difficulty) /
        newNumDiff;

    return {
        newScore,
        newNumScore,
        newDiff,
        newNumDiff,
    };
};

import { createRating, updateRating } from '@/api/rating';
import { Problem } from '@/types/problem';
import { IUser } from '@/types/user';
import { calculateRating } from '@/utils/calculateRating';

export const handleRating = async (
    problemId: string,
    user: IUser,
    score: number,
    difficulty: number,
    problems: Problem[]
) => {
    const problem = problems.find((p) => p.id === problemId);
    if (!problem) return problems;

    let ratingId: string;
    if (problem.ratingId) {
        await updateRating(problem.ratingId, {
            score,
            difficulty,
        });
        ratingId = problem.ratingId;
    } else {
        const createdRating = await createRating({
            score,
            difficulty,
            problemId: problemId,
            userId: user.id,
        });
        ratingId = createdRating.id;
    }

    const newProblems = problems.map((p) => {
        if (p.id === problemId) {
            const { newScore, newNumScore, newDiff, newNumDiff } =
                calculateRating(p, score, difficulty);

            return {
                ...p,
                ratingId,
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
    return newProblems;
};

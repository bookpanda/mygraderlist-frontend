import { likeProblem, unlikeProblem } from '@/api/like';
import { Problem } from '@/types/problem';
import { IUser } from '@/types/user';

export const handleLike = async (
    problemId: string,
    user: IUser,
    problems: Problem[]
) => {
    const createdLike = await likeProblem({
        ProblemID: problemId,
        UserID: user.id,
    });
    const newProblems = problems.map((p) => {
        if (p.id === problemId) {
            return { ...p, heart: createdLike.id };
        }
        return p;
    });
    return newProblems;
};

export const handleUnlike = async (problemId: string, problems: Problem[]) => {
    const likeId = problems.find((p) => p.id === problemId)?.heart;
    if (!likeId) return problems;

    await unlikeProblem(likeId);
    const newProblems = problems.map((p) => {
        if (p.id === problemId) {
            return { ...p, heart: undefined };
        }
        return p;
    });
    return newProblems;
};

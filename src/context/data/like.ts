import { createLike, deleteLike } from '@/api/like';
import { Problem } from '@/types/problem';
import { IUser } from '@/types/user';

export const handleCreateLike = async (
    problemId: string,
    user: IUser,
    problems: Problem[]
) => {
    const createdLike = await createLike({
        problemId: problemId,
        userId: user.id,
    });
    const newProblems = problems.map((p) => {
        if (p.id === problemId) {
            return { ...p, heart: createdLike.id };
        }
        return p;
    });
    return newProblems;
};

export const handleDeleteLike = async (
    problemId: string,
    problems: Problem[]
) => {
    const likeId = problems.find((p) => p.id === problemId)?.heart;
    if (!likeId) return problems;

    await deleteLike(likeId);
    const newProblems = problems.map((p) => {
        if (p.id === problemId) {
            return { ...p, heart: undefined };
        }
        return p;
    });
    return newProblems;
};

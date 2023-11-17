import { createEmoji, deleteEmoji } from '@/api/emoji';
import { Problem } from '@/types/problem';
import { IUser } from '@/types/user';

export const handleCreateEmoji = async (
    emoji: string,
    problemId: string,
    user: IUser,
    problems: Problem[],
    currentProblem: Problem
) => {
    const createdEmoji = await createEmoji({
        emoji: emoji,
        problemId: problemId,
        userId: user.id,
    });
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
        if (p.id === problemId) {
            return {
                ...p,
                emojis: newEmojis.filter((e) => e.count > 0),
                emojisSelf: [...p.emojisSelf, { emoji, id: createdEmoji.id }],
            };
        }
        return p;
    });
    return newProblems;
};

export const handleDeleteEmoji = async (
    emoji: string,
    problemId: string,
    problems: Problem[],
    currentProblem: Problem
) => {
    const emojisSelf = problems.find((p) => p.id === problemId)?.emojisSelf;
    const emojiId = emojisSelf?.find((e) => e.emoji === emoji)?.id;
    if (!emojiId) return problems;

    const currentCount =
        currentProblem.emojis.find((e) => e.emoji === emoji)?.count ?? 0;
    if (currentCount === 0) return problems;

    await deleteEmoji(emojiId);
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
        if (p.id === problemId) {
            return {
                ...p,
                emojis: newEmojis.filter((e) => e.count > 0),
                emojisSelf: p.emojisSelf.filter((e) => e.emoji !== emoji),
            };
        }
        return p;
    });
    return newProblems;
};

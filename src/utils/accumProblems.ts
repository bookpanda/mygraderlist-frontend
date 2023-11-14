import { IEmojis } from '@/types/emoji';
import { ILikes } from '@/types/like';
import { IProblems, Problem } from '@/types/problem';
import { IRatings } from '@/types/rating';

export const accumProblems = (
    problems: IProblems | null,
    ratings: IRatings | null,
    userRatings: IRatings | null,
    emojis: IEmojis | null,
    userEmojis: IEmojis | null,
    likes: ILikes | null
): Problem[] => {
    const accumProblems: Problem[] = [];
    problems?.forEach((problem) => {
        const heart = likes?.find((like) => like.problemId === problem.id)
            ? 1
            : 0;

        const _scoreSelf = userRatings?.find(
            (rating) => rating.problemId === problem.id
        )?.score;
        const scoreSelf = _scoreSelf ? _scoreSelf : 0;

        const _difficultySelf = userRatings?.find(
            (rating) => rating.problemId === problem.id
        )?.difficulty;
        const difficultySelf = _difficultySelf ? _difficultySelf : 0;

        const _emojis = emojis?.filter(
            (emoji) => emoji.problemId === problem.id
        );
        const mp: Map<string, number> = new Map();
        _emojis?.forEach((emoji) => {
            if (mp.has(emoji.emoji)) {
                mp.set(emoji.emoji, (mp.get(emoji.emoji) ?? 0) + 1);
            } else {
                mp.set(emoji.emoji, 1);
            }
        });
        const emojisProblem = Array.from(mp, ([emoji, count]) => ({
            emoji,
            count,
        }));

        const _emojisSelf = userEmojis?.filter(
            (emoji) => emoji.problemId === problem.id
        );
        const emojisSelf = _emojisSelf?.map((emoji) => emoji.emoji) ?? [];

        const newProblem: Problem = {
            ...problem,
            score: 0,
            numScore: 0,
            difficulty: 0,
            numDifficulty: 0,
            heart,
            scoreSelf,
            difficultySelf,
            emojis: emojisProblem,
            emojisSelf,
        };
        accumProblems.push(newProblem);
    });
    ratings?.forEach((rating) => {
        const problem = accumProblems.find(
            (problem) => problem.id === rating.problemId
        );
        let count = 0;
        if (problem) {
            problem.score += rating.score;
            problem.numScore += 1;
            problem.difficulty += rating.difficulty;
            problem.numDifficulty += 1;
            count += 1;
        }
    });
    // accumProblems.forEach((problem) => {
    userRatings?.forEach((rating) => {
        const problem = accumProblems.find(
            (problem) => problem.id === rating.problemId
        );
        if (problem) {
            problem.scoreSelf = rating.score;
            problem.difficultySelf = rating.difficulty;
        }
    });

    return accumProblems;
};

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
        const heart =
            likes?.length === 0
                ? 0
                : likes?.find((like) => like.problemId === problem.id)
                ? 1
                : 0;
        // if (heart)
        console.log('problem ', problem.name, 'have heart ');

        const _scoreSelf =
            userRatings?.length === 0
                ? 0
                : userRatings?.find((rating) => rating.problemId === problem.id)
                      ?.score;
        const scoreSelf = _scoreSelf ? _scoreSelf : 0;

        const _difficultySelf =
            userRatings?.length === 0
                ? 0
                : userRatings?.find((rating) => rating.problemId === problem.id)
                      ?.difficulty;
        const difficultySelf = _difficultySelf ? _difficultySelf : 0;

        const _emojis =
            emojis?.length === 0
                ? []
                : emojis?.filter((emoji) => emoji.problemId === problem.id);
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

        const _emojisSelf =
            userEmojis?.length === 0
                ? []
                : userEmojis?.filter((emoji) => emoji.problemId === problem.id);
        const emojisSelf = _emojisSelf?.map((emoji) => emoji.emoji) ?? [];

        const _ratings = ratings?.filter(
            (rating) => rating.problemId === problem.id
        );
        const numScore = _ratings ? _ratings.length : 0;
        const numDifficulty = _ratings ? _ratings.length : 0;
        const _score = _ratings?.reduce((prev, curr) => prev + curr.score, 0);
        const score = _score ? _score / numScore : 0;
        const _difficulty = _ratings?.reduce(
            (prev, curr) => prev + curr.difficulty,
            0
        );
        const difficulty = _difficulty ? _difficulty / numDifficulty : 0;

        const newProblem: Problem = {
            ...problem,
            score,
            numScore,
            difficulty,
            numDifficulty,
            heart,
            scoreSelf,
            difficultySelf,
            emojis: emojisProblem,
            emojisSelf,
        };
        accumProblems.push(newProblem);
    });

    return accumProblems;
};

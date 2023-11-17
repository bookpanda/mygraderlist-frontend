export type IProblems = {
    id: string;
    courseCode: string;
    group: string;
    code: string;
    name: string;
    order: number;
}[];

export type Problem = {
    id: string;
    courseCode: string;
    group: string;
    code: string;
    name: string;
    order: number;
    heart: string | null | undefined;
    ratingId: string | null | undefined;
    score: number;
    numScore: number;
    difficulty: number;
    numDifficulty: number;
    scoreSelf: number;
    difficultySelf: number;
    emojis: {
        emoji: string;
        count: number;
    }[];
    emojisSelf: { emoji: string; id: string }[];
};

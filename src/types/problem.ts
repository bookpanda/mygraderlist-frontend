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
    score: number;
    numScore: number;
    difficulty: number;
    numDifficulty: number;
    heart: number;
    scoreSelf: number;
    difficultySelf: number;
    emojis: {
        emoji: string;
        count: number;
    }[];
    emojisSelf: string[];
};

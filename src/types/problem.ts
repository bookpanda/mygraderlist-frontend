export type IProblems = {
    id: number;
    courseCode: string;
    group: string;
    code: string;
    name: string;
}[];

export type Problem = {
    id: number;
    courseCode: string;
    group: string;
    code: string;
    name: string;
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

export type Course = {
    id: number;
    courseCode: string;
    name: string;
    color: string;
};

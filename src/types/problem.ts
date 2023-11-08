export type Problem = {
    id: number;
    course: string;
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
    course: string;
    name: string;
    color: string;
};

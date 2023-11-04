export type Problem = {
    id: number;
    course: string;
    group: string;
    code: string;
    name: string;
    score: number;
    difficulty: number;
    heart: number;
    scoreSelf: number;
    difficultySelf: number;
};

export type Course = {
    id: number;
    course: string;
    name: string;
    color: string;
};

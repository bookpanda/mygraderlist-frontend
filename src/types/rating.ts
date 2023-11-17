export type IRating = {
    id: string;
    score: number;
    difficulty: number;
    problemId: string;
    userId: string;
};

export type IRatings = IRating[];

export type RatingDto = {
    score: number;
    difficulty: number;
    problemId: string;
    userId: string;
};

export type UpdateRatingDto = {
    score: number;
    difficulty: number;
};

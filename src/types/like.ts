export type ILike = {
    id: string;
    problemId: string;
    userId: string;
};

export type ILikes = ILike[];

export type LikeDto = {
    ProblemID: string;
    UserID: string;
};

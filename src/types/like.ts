export type ILike = {
    id: string;
    problemId: string;
    userId: string;
};

export type ILikes = ILike[];

export type LikeDto = {
    problemId: string;
    userId: string;
};

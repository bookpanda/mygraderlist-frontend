import { AxiosResponse } from 'axios';

import { apiClient } from './axios';
import { ILike, ILikes, LikeDto } from '@/types/like';

export const getUserLikes = async (): Promise<ILikes | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<ILikes>('/like/mylikes/');
    } catch (err) {
        return null;
    }

    return res.data;
};

export const likeProblem = async (like: LikeDto): Promise<ILike> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.post<ILikes>('/like/', {
            problem_id: like.ProblemID,
            user_id: like.UserID,
        });
    } catch (err: any) {
        const message = err.response?.data.message;
        if (message) {
            throw new Error(message);
        }
        throw new Error('No Response from Server');
    }

    if (res.status !== 201) {
        throw new Error(res.data.message);
    }

    return res.data;
};

export const unlikeProblem = async (id: string): Promise<boolean> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.delete<boolean>(`/like/${id}`);
    } catch (err: any) {
        const message = err.response?.data.message;
        if (message) {
            throw new Error(message);
        }
        throw new Error('No Response from Server');
    }

    if (res.status !== 200) {
        throw new Error(res.data.message);
    }

    return true;
};

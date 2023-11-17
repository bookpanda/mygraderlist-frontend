import { AxiosResponse } from 'axios';

import { apiClient } from './axios';
import { IRating, IRatings, RatingDto, UpdateRatingDto } from '@/types/rating';

export const getAllRatings = async (): Promise<IRatings | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<IRatings>('/rating/');
    } catch (err) {
        return null;
    }

    return res.data;
};

export const getUserRatings = async (): Promise<IRatings | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<IRatings>('/rating/myratings/');
    } catch (err) {
        return null;
    }

    return res.data;
};

export const createRating = async (rating: RatingDto): Promise<IRating> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.post<IRating>('/rating/', {
            score: rating.score,
            difficulty: rating.difficulty,
            problem_id: rating.problemId,
            user_id: rating.userId,
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

export const updateRating = async (
    id: string,
    rating: UpdateRatingDto
): Promise<IRating> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.post<IRating>(`/rating/${id}`, {
            score: rating.score,
            difficulty: rating.difficulty,
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

export const deleteRating = async (id: string): Promise<boolean> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.delete<boolean>(`/rating/${id}`);
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

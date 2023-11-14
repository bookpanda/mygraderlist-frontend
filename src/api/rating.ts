import { AxiosResponse } from 'axios';

import { apiClient } from './axios';
import { IRatings } from '@/types/rating';

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

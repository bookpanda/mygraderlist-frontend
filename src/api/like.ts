import { AxiosResponse } from 'axios';

import { apiClient } from './axios';
import { ILikes } from '@/types/like';

export const getUserLikes = async (): Promise<ILikes | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<ILikes>('/emoji/mylikes/');
    } catch (err) {
        return null;
    }

    return res.data;
};

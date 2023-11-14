import { AxiosResponse } from 'axios';

import { IProblems } from '@/types/problem';
import { apiClient } from './axios';

export const getAllProblems = async (): Promise<IProblems | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<IProblems>('/problem/');
    } catch (err) {
        return null;
    }

    return res.data;
};

import { AxiosResponse } from 'axios';

import { ICourses } from '@/types/course';
import { apiClient } from './axios';

export const getAllCourses = async (): Promise<ICourses | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<ICourses>('/course/');
    } catch (err) {
        return null;
    }

    return res.data;
};

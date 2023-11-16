import { AxiosResponse } from 'axios';
import { apiClient } from './axios';
import { IUser } from '@/types/user';

const getUserProfile = async (): Promise<IUser | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<IUser>('/auth/me');
    } catch (err) {
        return null;
    }

    return res.data;
};

export { getUserProfile };

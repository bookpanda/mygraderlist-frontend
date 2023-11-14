import { AxiosResponse } from 'axios';

import { apiClient } from './axios';
import { IEmojis } from '@/types/emoji';

export const getAllEmojis = async (): Promise<IEmojis | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<IEmojis>('/emoji/');
    } catch (err) {
        return null;
    }

    return res.data;
};

export const getUserEmojis = async (): Promise<IEmojis | null> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.get<IEmojis>('/emoji/myemojis/');
    } catch (err) {
        return null;
    }

    return res.data;
};

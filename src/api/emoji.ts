import { AxiosResponse } from 'axios';

import { apiClient } from './axios';
import { EmojiDto, IEmoji, IEmojis } from '@/types/emoji';

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

export const createEmoji = async (emoji: EmojiDto): Promise<IEmoji> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.post<IEmoji>('/emoji/', {
            emoji: emoji.emoji,
            problem_id: emoji.problemId,
            user_id: emoji.userId,
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

export const deleteEmoji = async (id: string): Promise<boolean> => {
    let res: AxiosResponse;
    try {
        res = await apiClient.delete<boolean>(`/emoji/${id}`);
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

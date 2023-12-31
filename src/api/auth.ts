import { ICredential, IGoogleLoginUrl } from '@/types/auth';
import axios, { AxiosError, AxiosResponse } from 'axios';

const authClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

const renewAccessToken = async (refreshToken: string) => {
    let res: AxiosResponse;
    try {
        res = await authClient.post<ICredential>('/auth/refreshToken', {
            refresh_token: refreshToken,
        });
    } catch (err) {
        return null;
    }

    const expiresOn = new Date();
    expiresOn.setSeconds(expiresOn.getSeconds() + res.data.expiresIn);
    localStorage.setItem(
        'token',
        JSON.stringify({
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
            expiresOn,
        })
    );
    return res.data.accessToken;
};

export const getAccessToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }

    const { accessToken, refreshToken, expiresIn } = JSON.parse(
        token
    ) as ICredential;

    // Renew access token if expired
    const now = new Date();
    const expiry = new Date(expiresIn);
    if (now > expiry) {
        const newAccessToken = await renewAccessToken(refreshToken);
        if (!newAccessToken) {
            return null;
        }
        return newAccessToken;
    }
    return accessToken;
};

export const getGoogleLoginUrl = async (): Promise<IGoogleLoginUrl> => {
    let res: AxiosResponse;
    try {
        res = await authClient.post<ICredential>('/auth/googleUrl', {});
    } catch (err) {
        const error = err as AxiosError;
        throw error;
    }

    return {
        url: res.data,
    };
};

export const exchangeGoogleCodeForToken = async (
    code: string
): Promise<ICredential | number | null> => {
    let res: AxiosResponse;
    try {
        res = await authClient.post<ICredential>(`/auth/verifyGoogle`, {
            code,
        });
    } catch (err) {
        const error = err as AxiosError;
        throw error;
    }

    const expiresIn = new Date();
    expiresIn.setSeconds(expiresIn.getSeconds() + res.data.expiresIn);
    return {
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        expiresIn,
    };
};

'use client';

import {
    PropsWithChildren,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { AuthContext } from './AuthContext';
import { exchangeGoogleCodeForToken, getGoogleLoginUrl } from '@/api/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { getUserProfile } from '@/api/user';
import { IUser } from '@/types/user';
import { useDataContext } from './DataContext';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const { clearAuthData, fetchData } = useDataContext();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    const isFetching = useRef(false);

    const auth = useCallback(async () => {
        if (isFetching.current) {
            return;
        }
        isFetching.current = true;

        const token = localStorage.getItem('token');
        if (!token) {
            setIsAuth(false);
        }
        const user = await getUserProfile();
        if (user) {
            setIsAuth(true);
            setUser(user);
        } else setIsAuth(false);

        isFetching.current = false;
    }, []);

    useEffect(() => {
        auth();
    }, [auth]);

    const handleLogin = useCallback(
        async (code: string) => {
            try {
                const token = await exchangeGoogleCodeForToken(code);
                localStorage.setItem('token', JSON.stringify(token));
                setIsAuth(true);
                auth();
                await fetchData();
                router.push('/');
            } catch {
                // toast({
                //     title: 'Login Failed',
                //     description: 'Please try again later',
                //     duration: 3000,
                // });
            }
        },
        [router, auth, fetchData]
    );

    useEffect(() => {
        if (searchParams.has('code')) {
            handleLogin(searchParams.get('code') as string);
        } else {
            router.push('/');
        }
    }, [handleLogin, searchParams, router]);

    const login = useCallback(async () => {
        const { url } = await getGoogleLoginUrl();
        if (window) window.open(url, '_blank');
    }, []);

    const logout = useCallback(() => {
        console.log('logout');
        localStorage.clear();
        setIsAuth(false);
        setUser(null);
        clearAuthData();
        router.refresh();
    }, [clearAuthData, router]);

    const value = useMemo(
        () => ({ isAuth, login, logout, user }),
        [isAuth, login, logout, user]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

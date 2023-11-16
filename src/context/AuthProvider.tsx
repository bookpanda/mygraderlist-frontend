'use client';

import {
    PropsWithChildren,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { AuthContext } from './AuthContext';
import { exchangeGoogleCodeForToken, getGoogleLoginUrl } from '@/api/auth';
import { useRouter, useSearchParams } from 'next/navigation';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(false);
    // const isFetching = useRef(false);

    // const auth = useCallback(async () => {
    //     if (isFetching.current) {
    //         return;
    //     }
    //     isFetching.current = true;

    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         setIsAuth(false);
    //     }
    //     const user = await getUserProfile();
    //     if (user) setIsAuth(true);
    //     else setIsAuth(false);

    //     isFetching.current = false;
    // }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsAuth(false);
        } else setIsAuth(true);
    }, []);

    const handleLogin = useCallback(
        async (code: string) => {
            try {
                const token = await exchangeGoogleCodeForToken(code);
                localStorage.setItem('token', JSON.stringify(token));
                setIsAuth(true);
                router.push('/');
            } catch {
                // toast({
                //     title: 'Login Failed',
                //     description: 'Please try again later',
                //     duration: 3000,
                // });
            }
        },
        [router]
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
        localStorage.clear();
        setIsAuth(false);
    }, []);

    const value = useMemo(
        () => ({ isAuth, login, logout }),
        [isAuth, login, logout]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

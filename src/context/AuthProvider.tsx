'use client';

import { PropsWithChildren, useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        setIsAuth(true);
    };

    const logout = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

'use client';

import { PropsWithChildren, useState } from 'react';
import { Footer, AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [footer, setFooter] = useState<Footer | null>(null);

    return (
        <AuthContext.Provider value={{ footer, setFooter }}>
            {children}
        </AuthContext.Provider>
    );
};

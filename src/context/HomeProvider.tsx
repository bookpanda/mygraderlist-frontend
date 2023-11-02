'use client';

import { PropsWithChildren, useState } from 'react';
import { Footer, HomeContext } from './HomeContext';

export const HomeContextProvider = ({ children }: PropsWithChildren) => {
    const [footer, setFooter] = useState<Footer | null>(null);

    return (
        <HomeContext.Provider value={{ footer, setFooter }}>
            {children}
        </HomeContext.Provider>
    );
};

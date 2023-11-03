'use client';

import { PropsWithChildren, useState } from 'react';
import { Footer, DataContext } from './DataContext';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const [footer, setFooter] = useState<Footer | null>(null);

    return (
        <DataContext.Provider value={{ footer, setFooter }}>
            {children}
        </DataContext.Provider>
    );
};

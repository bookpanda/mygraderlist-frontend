'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { OpenContext } from './OpenContext';

export const OpenContextProvider = ({ children }: PropsWithChildren) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };
    const closeAllModals = () => {
        setIsEditModalOpen(false);
    };

    useEffect(() => {}, []);

    return (
        <OpenContext.Provider
            value={{
                isEditModalOpen,
                openEditModal,
                closeEditModal,
                closeAllModals,
            }}
        >
            {children}
        </OpenContext.Provider>
    );
};

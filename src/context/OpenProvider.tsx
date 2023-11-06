'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { OpenContext } from './OpenContext';

export const OpenContextProvider = ({ children }: PropsWithChildren) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);

    const openEditModal = () => {
        closeAllModals();
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const openEmojiModal = () => {
        closeAllModals();
        setIsEmojiModalOpen(true);
    };
    const closeEmojiModal = () => {
        setIsEmojiModalOpen(false);
    };

    const closeAllModals = () => {
        closeEditModal();
    };

    useEffect(() => {}, []);

    return (
        <OpenContext.Provider
            value={{
                isEditModalOpen,
                openEditModal,
                closeEditModal,
                isEmojiModalOpen,
                openEmojiModal,
                closeEmojiModal,
            }}
        >
            {children}
        </OpenContext.Provider>
    );
};

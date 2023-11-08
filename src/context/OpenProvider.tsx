'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { OpenContext } from './OpenContext';

export const OpenContextProvider = ({ children }: PropsWithChildren) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
    const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
    const [isEnableProblemModal, setIsEnableProblemModal] = useState(true);

    const openEditModal = () => {
        closeAllModals();
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const openEmojiModal = () => {
        closeEditModal();
        setIsEmojiModalOpen(true);
    };
    const closeEmojiModal = () => {
        setIsEmojiModalOpen(false);
    };

    const openProblemModal = () => {
        closeEditModal();
        setIsProblemModalOpen(true);
        setIsEnableProblemModal(true);
    };
    const closeProblemModal = () => {
        setIsProblemModalOpen(false);
        setIsEnableProblemModal(false);
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
                isProblemModalOpen,
                openProblemModal,
                closeProblemModal,
                isEnableProblemModal,
                setIsEnableProblemModal,
            }}
        >
            {children}
        </OpenContext.Provider>
    );
};

'use client';

import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { OpenContext } from './OpenContext';

export const OpenContextProvider = ({ children }: PropsWithChildren) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
    const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
    const [isEnableProblemModal, setIsEnableProblemModal] = useState(true);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const viewport = useMemo(
        () => ({
            sm: windowSize.innerWidth > 0,
            md: windowSize.innerWidth > 768,
            lg: windowSize.innerWidth > 1024,
            xl: windowSize.innerWidth > 1280,
            '2xl': windowSize.innerWidth > 1536,
        }),
        [windowSize]
    );

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const openEditModal = () => {
        setIsEditModalOpen(false);
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

    function getWindowSize() {
        if (typeof window !== 'undefined') {
            const { innerWidth, innerHeight } = window;
            return { innerWidth, innerHeight };
        }
        return { innerWidth: 0, innerHeight: 0 };
    }

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
                viewport,
            }}
        >
            {children}
        </OpenContext.Provider>
    );
};

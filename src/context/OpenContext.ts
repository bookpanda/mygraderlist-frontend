import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface OpenContextProps {
    isEditModalOpen: boolean;
    openEditModal: () => void;
    closeEditModal: () => void;
    isEmojiModalOpen: boolean;
    openEmojiModal: () => void;
    closeEmojiModal: () => void;
    isProblemModalOpen: boolean;
    openProblemModal: () => void;
    closeProblemModal: () => void;
}

export const OpenContext = createContext<OpenContextProps>({
    isEditModalOpen: false,
    openEditModal: () => {},
    closeEditModal: () => {},
    isEmojiModalOpen: false,
    openEmojiModal: () => {},
    closeEmojiModal: () => {},
    isProblemModalOpen: false,
    openProblemModal: () => {},
    closeProblemModal: () => {},
});

export const useOpenContext = () => useContext(OpenContext);

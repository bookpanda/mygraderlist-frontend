import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type Viewport = {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    '2xl': boolean;
};

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
    isEnableProblemModal: boolean;
    setIsEnableProblemModal: Dispatch<SetStateAction<boolean>>;
    viewport: Viewport;
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
    isEnableProblemModal: true,
    setIsEnableProblemModal: () => {},
    viewport: {
        sm: false,
        md: false,
        lg: false,
        xl: false,
        '2xl': false,
    },
});

export const useOpenContext = () => useContext(OpenContext);

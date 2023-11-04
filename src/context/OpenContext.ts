import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface OpenContextProps {
    isEditModalOpen: boolean;
    openEditModal: () => void;
    closeEditModal: () => void;
    closeAllModals: () => void;
}

export const OpenContext = createContext<OpenContextProps>({
    isEditModalOpen: false,
    openEditModal: () => {},
    closeEditModal: () => {},
    closeAllModals: () => {},
});

export const useOpenContext = () => useContext(OpenContext);

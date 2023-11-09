'use client';

import { useOpenContext } from '@/context/OpenContext';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import Draggable from 'react-draggable';
import { useDataContext } from '@/context/DataContext';
import { useEffect } from 'react';
import clsx from 'clsx';

export const EmojiModal = () => {
    const { addEmoji, currentProblem } = useDataContext();
    const { isEmojiModalOpen, closeEmojiModal } = useOpenContext();

    useEffect(() => {
        closeEmojiModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentProblem?.id]);

    const handlePick = (emoji: EmojiClickData) => {
        if (currentProblem) addEmoji(currentProblem.id, emoji.emoji);
        closeEmojiModal();
    };
    return (
        <>
            <div className="absolute left-[30%] top-[20%] z-50 hidden xl:block">
                <Draggable>
                    <div
                        className={clsx(
                            'hover:cursor-pointer',
                            isEmojiModalOpen ? 'block' : 'hidden'
                        )}
                    >
                        <EmojiPicker
                            onEmojiClick={(emoji) => handlePick(emoji)}
                        />
                    </div>
                </Draggable>
            </div>
            <div className="absolute bottom-0 left-0 z-50 xl:hidden">
                <div
                    className={clsx(
                        'hover:cursor-pointer',
                        isEmojiModalOpen ? 'block' : 'hidden'
                    )}
                >
                    <EmojiPicker onEmojiClick={(emoji) => handlePick(emoji)} />
                </div>
            </div>
        </>
    );
};

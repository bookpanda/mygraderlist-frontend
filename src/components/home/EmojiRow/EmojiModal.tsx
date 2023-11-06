'use client';

import { useOpenContext } from '@/context/OpenContext';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import Draggable from 'react-draggable';
import { useDataContext } from '@/context/DataContext';

export const EmojiModal = () => {
    const { addEmoji, currentProblem } = useDataContext();
    const { isEmojiModalOpen } = useOpenContext();

    const handlePick = (emoji: EmojiClickData) => {
        if (currentProblem) addEmoji(currentProblem.id, emoji.emoji);
    };
    return (
        <div className="absolute left-[50%] top-[20%] z-50">
            {isEmojiModalOpen && (
                <Draggable>
                    <div className="hover:cursor-pointer">
                        <EmojiPicker
                            onEmojiClick={(emoji) => handlePick(emoji)}
                        />
                    </div>
                </Draggable>
            )}
        </div>
    );
};

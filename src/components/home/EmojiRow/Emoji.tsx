'use client';

import { Text } from '@/components/custom';
import { useDataContext } from '@/context/DataContext';
import clsx from 'clsx';
import { FC } from 'react';

interface EmojiProps {
    id: number;
    emojis: {
        emoji: string;
        count: number;
    };
    hasSelf: boolean;
}

export const Emoji: FC<EmojiProps> = ({ id, emojis, hasSelf }) => {
    const { addEmoji, removeEmoji, currentProblem } = useDataContext();
    const handleClick = () => {
        if (currentProblem?.id !== id) return;
        if (hasSelf) {
            removeEmoji(id, emojis.emoji);
        } else {
            addEmoji(id, emojis.emoji);
        }
    };
    return (
        <div
            className={clsx(
                'mt-1 flex space-x-1 rounded-full bg-gray-hl pl-1 pr-2 text-white hover:cursor-pointer',
                hasSelf && 'border-gray-light border'
            )}
            onClick={handleClick}
        >
            <Text variant="p2">{emojis.emoji}</Text>
            <Text variant="p1" className="text-gray-text">
                {emojis.count}
            </Text>
        </div>
    );
};

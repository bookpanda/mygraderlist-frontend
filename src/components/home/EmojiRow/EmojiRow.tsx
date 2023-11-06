'use client';

import clsx from 'clsx';
import { FC } from 'react';
import { Emoji } from './Emoji';
import { AddEmoji } from './AddEmoji';
import { useDataContext } from '@/context/DataContext';

interface EmojiRowProps {
    id: number;
    emojis: {
        emoji: string;
        count: number;
    }[];
    emojisSelf: string[];
    className?: string;
}

export const EmojiRow: FC<EmojiRowProps> = ({
    id,
    className,
    emojis,
    emojisSelf,
}) => {
    const { currentProblem } = useDataContext();
    return (
        <div className={clsx('mt-3 flex space-x-1 text-white', className)}>
            {emojis.map((e) => {
                const hasSelf = emojisSelf.includes(e.emoji);
                return (
                    <Emoji key={e.emoji} id={id} emojis={e} hasSelf={hasSelf} />
                );
            })}
            <AddEmoji isVisible={currentProblem?.id === id} />
        </div>
    );
};

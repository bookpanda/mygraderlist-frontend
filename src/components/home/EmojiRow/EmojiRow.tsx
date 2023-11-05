import clsx from 'clsx';
import { FC } from 'react';
import { Emoji } from './Emoji';

interface EmojiRowProps {
    emojis: {
        emoji: string;
        count: number;
    }[];
    emojisSelf: string[];
    className?: string;
}

export const EmojiRow: FC<EmojiRowProps> = ({
    className,
    emojis,
    emojisSelf,
}) => {
    return (
        <div className={clsx('mt-3 flex space-x-1 text-white', className)}>
            {emojis.map((e) => {
                const hasSelf = e.emoji in emojisSelf;
                return (
                    <Emoji
                        key={e.emoji}
                        emoji={e.emoji}
                        amount={e.count}
                        hasSelf={hasSelf}
                    />
                );
            })}
        </div>
    );
};

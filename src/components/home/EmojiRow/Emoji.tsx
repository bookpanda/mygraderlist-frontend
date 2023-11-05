import { Text } from '@/components/custom';
import { FC } from 'react';

interface EmojiProps {
    emoji: string;
    amount: number;
    hasSelf: boolean;
}

export const Emoji: FC<EmojiProps> = ({ emoji, amount }) => {
    return (
        <div className="flex space-x-1 rounded-full bg-gray-hl pl-1 pr-2 text-white">
            <Text variant="p2">{emoji}</Text>
            <Text variant="p1" className="text-gray-text">
                {amount}
            </Text>
        </div>
    );
};

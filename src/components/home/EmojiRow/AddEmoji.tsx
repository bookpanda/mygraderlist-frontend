import { Text } from '@/components/custom';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { FC } from 'react';

interface AddEmojiProps {
    isVisible: boolean;
}

export const AddEmoji: FC<AddEmojiProps> = ({ isVisible }) => {
    return isVisible ? (
        <TooltipProvider delayDuration={50}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center hover:cursor-pointer">
                        <Image
                            src={require(`@images/add_emoji.svg`)}
                            width={18}
                            height={18}
                            className="text-gray-text"
                            style={{ objectFit: 'cover' }}
                            alt="add_emoji"
                            unoptimized
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="border-0 bg-gray-600">
                    <Text variant="p1" className="text-white">
                        Add Reaction
                    </Text>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ) : (
        <div className="h-[18px] w-[18px]"></div>
    );
};

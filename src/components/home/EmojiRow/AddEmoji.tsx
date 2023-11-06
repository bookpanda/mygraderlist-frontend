import { Text } from '@/components/custom';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import Draggable from 'react-draggable';
import { useDataContext } from '@/context/DataContext';

interface AddEmojiProps {
    isVisible: boolean;
    id: number;
}

export const AddEmoji: FC<AddEmojiProps> = ({ isVisible, id }) => {
    const [open, setOpen] = useState(false);
    const { addEmoji } = useDataContext();

    useEffect(() => {
        setOpen(false);
    }, [isVisible]);

    const handlePick = (emoji: EmojiClickData) => {
        console.log(emoji.emoji);
        addEmoji(id, emoji.emoji);
    };

    return isVisible ? (
        <>
            <TooltipProvider delayDuration={50}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className="trigger flex items-center hover:cursor-pointer"
                            onClick={() => {
                                setOpen(!open);
                                console.log(open);
                            }}
                        >
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
            {open && (
                <Draggable>
                    <div className="absolute hover:cursor-pointer">
                        <EmojiPicker
                            onEmojiClick={(emoji) => handlePick(emoji)}
                        />
                    </div>
                </Draggable>
            )}
        </>
    ) : (
        <div className="h-[18px] w-[18px]"></div>
    );
};

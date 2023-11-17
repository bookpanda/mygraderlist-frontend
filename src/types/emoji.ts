export type IEmoji = {
    id: string;
    emoji: string;
    problemId: string;
    userId: string;
};

export type IEmojis = IEmoji[];

export type EmojiDto = {
    emoji: string;
    problemId: string;
    userId: string;
};

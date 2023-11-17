'use client';

import { useDataContext } from '@/context/data/DataContext';
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { FC } from 'react';

interface LikeButtonProps {
    heart: string | null | undefined;
    id: string;
    width?: number;
    show?: boolean;
}

export const LikeButton: FC<LikeButtonProps> = ({ heart, id, width, show }) => {
    const { like, unlike } = useDataContext();
    return (
        <>
            {!heart ? (
                show && (
                    <HeartIcon
                        className={clsx(
                            'h-6 w-6 text-gray-text hover:cursor-pointer'
                        )}
                        style={{ width: `${width}px`, height: `${width}px` }}
                        onClick={() => like(id)}
                    />
                )
            ) : (
                <HeartFilledIcon
                    className={clsx('h-6 w-6 text-green hover:cursor-pointer')}
                    style={{ width: `${width}px`, height: `${width}px` }}
                    onClick={() => unlike(id)}
                />
            )}
        </>
    );
};

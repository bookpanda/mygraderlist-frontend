'use client';

import { useDataContext } from '@/context/DataContext';
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { FC } from 'react';

interface LikeButtonProps {
    heart: number;
    id: number;
    width?: number;
}

export const LikeButton: FC<LikeButtonProps> = ({ heart, id, width }) => {
    const { like, unlike } = useDataContext();
    return (
        <>
            {heart === 0 ? (
                <HeartIcon
                    className={clsx(
                        'text-gray-text hover:cursor-pointer',
                        width ? `h-${width} w-${width}` : 'h-6 w-6'
                    )}
                    onClick={() => like(id)}
                />
            ) : (
                <HeartFilledIcon
                    className={clsx(
                        'text-green hover:cursor-pointer',
                        width ? `h-${width} w-${width}` : 'h-6 w-6'
                    )}
                    onClick={() => unlike(id)}
                />
            )}
        </>
    );
};

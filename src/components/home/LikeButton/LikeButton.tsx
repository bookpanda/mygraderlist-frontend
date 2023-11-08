'use client';

import { useDataContext } from '@/context/DataContext';
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { FC } from 'react';

interface LikeButtonProps {
    heart: number;
    id: number;
    width?: number;
    show?: boolean;
}

export const LikeButton: FC<LikeButtonProps> = ({ heart, id, width, show }) => {
    const { like, unlike } = useDataContext();
    return (
        <>
            {heart === 0 ? (
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

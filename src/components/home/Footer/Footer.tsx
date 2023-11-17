'use client';

import { Text } from '@/components/custom';
import { useDataContext } from '@/context/data/DataContext';
import { FooterImage } from './FooterImage';
import { LikeButton } from '../LikeButton/LikeButton';
import { useOpenContext } from '@/context/OpenContext';
import { FastAverageColor } from 'fast-average-color';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export const Footer = () => {
    const { currentProblem, currentCourse } = useDataContext();
    const { openEditModal } = useOpenContext();
    const contianerRef = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState({ bg: '', isDark: true });

    useEffect(() => {
        if (contianerRef.current === null || !currentProblem) return;
        const fac = new FastAverageColor();
        fac.getColorAsync(
            contianerRef.current.querySelector('img') as HTMLImageElement
        )
            .then((color) => {
                setColor({
                    bg: color.rgba,
                    isDark: color.isDark,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }, [currentProblem]);
    return (
        <>
            <div className="absolute bottom-0 left-0 z-10 hidden w-full items-center space-x-4 bg-gray-800 p-4 xl:flex">
                {currentProblem && <FooterImage problem={currentProblem} />}
                <div className="py-2">
                    <Text variant="p1" className="text-white">
                        {currentProblem?.name}
                    </Text>
                    <Text variant="p3" className="text-gray-text">
                        {currentProblem?.code}
                    </Text>
                </div>
                {currentProblem && (
                    <LikeButton
                        heart={currentProblem.heart}
                        id={currentProblem.id}
                        show
                    />
                )}
            </div>
            {currentProblem && (
                <div
                    ref={contianerRef}
                    className="absolute bottom-[10%] left-0 z-10 flex w-full items-center space-x-4 rounded-lg p-2 xl:hidden"
                    style={{
                        backgroundColor:
                            color.bg !== '' ? color.bg : currentCourse?.color,
                    }}
                    onClick={openEditModal}
                >
                    {currentProblem && <FooterImage problem={currentProblem} />}
                    <div className="py-2">
                        <Text
                            variant="p1"
                            className={clsx(
                                color.isDark ? 'text-white' : 'text-black'
                            )}
                        >
                            {currentProblem?.name}
                        </Text>
                        <Text
                            variant="p3"
                            className={clsx(
                                color.isDark
                                    ? 'text-gray-textlight'
                                    : 'text-gray-600'
                            )}
                        >
                            {currentProblem?.code}
                        </Text>
                    </div>
                </div>
            )}
        </>
    );
};

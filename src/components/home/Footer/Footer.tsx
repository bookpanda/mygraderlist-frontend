'use client';

import { Text } from '@/components/custom';
import { useDataContext } from '@/context/DataContext';
import Image from 'next/image';

export const Footer = () => {
    const { currentProblem } = useDataContext();
    return (
        <div className="absolute bottom-0 left-0 z-10 flex w-full bg-gray-800 p-4">
            {currentProblem && (
                <Image
                    src={
                        currentProblem.group === ''
                            ? require(
                                  `@images/courses/${currentProblem.course}/icon.webp`
                              )
                            : require(
                                  `@images/courses/${currentProblem.course}/${currentProblem.group}/${currentProblem.code}.webp`
                              )
                    }
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', borderRadius: '8%' }}
                    alt="current_problem"
                    unoptimized
                />
            )}
            <div className="ml-4 py-2">
                <Text variant="p1" className="text-white">
                    {currentProblem?.name}
                </Text>
                <Text variant="p3" className="text-gray-text">
                    {currentProblem?.code}
                </Text>
            </div>
        </div>
    );
};

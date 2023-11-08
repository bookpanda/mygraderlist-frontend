'use client';

import { Text } from '@/components/custom';
import { useDataContext } from '@/context/DataContext';
import { FooterImage } from './FooterImage';

export const Footer = () => {
    const { currentProblem } = useDataContext();
    return (
        <div className="absolute bottom-0 left-0 z-10 flex w-full bg-gray-800 p-4">
            {currentProblem && <FooterImage problem={currentProblem} />}
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

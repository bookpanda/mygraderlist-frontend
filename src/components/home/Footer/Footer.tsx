'use client';

import { Text } from '@/components/custom';
import { useDataContext } from '@/context/DataContext';
import { FooterImage } from './FooterImage';
import { LikeButton } from '../LikeButton/LikeButton';

export const Footer = () => {
    const { currentProblem } = useDataContext();
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
            <div
                className="bg-gray-800p-4 absolute bottom-[10%] left-0 z-10 flex w-full items-center space-x-4 md:hidden"
                // style={{
                //     backgroundImage: `linear-gradient(to top right, ${c?.color}40, ${c?.color})`,
                // }}
            >
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
        </>
    );
};

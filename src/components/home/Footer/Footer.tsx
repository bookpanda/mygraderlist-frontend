'use client';

import { Text } from '@/components/custom';
import { useDataContext } from '@/context/DataContext';
import { FooterImage } from './FooterImage';
import { LikeButton } from '../LikeButton/LikeButton';
import { useOpenContext } from '@/context/OpenContext';

export const Footer = () => {
    const { currentProblem, currentCourse } = useDataContext();
    const { openEditModal } = useOpenContext();
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
                    className="bg-gray-800p-4 absolute bottom-[10%] left-0 z-10 flex w-full items-center space-x-4 rounded-lg p-2 md:hidden"
                    style={{
                        backgroundColor: `${currentCourse?.color}80`,
                    }}
                    onClick={openEditModal}
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
            )}
        </>
    );
};

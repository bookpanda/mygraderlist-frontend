'use client';

import { RoundDiv, Text } from '@/components/custom';
import { useDataContext } from '@/context/DataContext';
import { useOpenContext } from '@/context/OpenContext';
import { MoreHorizontal, X } from 'lucide-react';
import Image from 'next/image';
import { LikeButton } from '../LikeButton/LikeButton';

export const ProblemModal = () => {
    const { isProblemModalOpen, closeProblemModal, openEditModal } =
        useOpenContext();
    const { currentProblem, currentCourse } = useDataContext();
    return (
        isProblemModalOpen &&
        currentProblem &&
        currentCourse && (
            <div className="no-scrollbar hidden h-full w-1/4 overflow-auto rounded-xl bg-gray-600 p-4 md:block">
                <div className="flex h-8 items-center justify-between">
                    <Text variant="h5" className="text-white">
                        {currentCourse.course}
                    </Text>
                    <X
                        className="text-gray-textlight h-8 w-8 rounded-full p-1 duration-300 hover:scale-110 hover:cursor-pointer hover:bg-gray-hl hover:text-white"
                        onClick={closeProblemModal}
                    />
                </div>
                <RoundDiv className="mt-4">
                    <Image
                        src={require(
                            `@images/courses/${currentProblem.course}/${currentProblem.group}/${currentProblem.code}.webp`
                        )}
                        alt="problem"
                        style={{ width: '100%', height: '100%' }}
                        className="rounded-md"
                        unoptimized
                    />
                </RoundDiv>
                <div className="mt-4 flex justify-between">
                    <div>
                        <Text variant="h3" className="text-white">
                            <b>{currentProblem.name}</b>
                        </Text>
                        <Text variant="p1" className="text-gray-text">
                            {currentProblem.code}
                        </Text>
                    </div>
                    <div className="flex w-20 items-center justify-center space-x-5">
                        <LikeButton
                            heart={currentProblem.heart}
                            id={currentProblem.id}
                            show
                        />
                        <div className="w-1/2">
                            <MoreHorizontal
                                onClick={openEditModal}
                                className="hover:cursor-pointer' h-[50%] text-white hover:scale-110 hover:cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

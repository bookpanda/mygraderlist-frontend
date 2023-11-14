'use client';

import { Text } from '@/components/custom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDataContext } from '@/context/DataContext';
import { useOpenContext } from '@/context/OpenContext';
import Image from 'next/image';
import { LikeButton } from '../LikeButton/LikeButton';
import { RatingForm } from './RatingForm';

export const EditModal = () => {
    const { currentProblem } = useDataContext();
    const c = currentProblem;
    const { isEditModalOpen, closeEditModal } = useOpenContext();

    return (
        <Dialog open={isEditModalOpen}>
            {c && (
                <DialogContent
                    onInteractOutside={closeEditModal}
                    className="rounded-xl bg-gray-400"
                >
                    <div className="mb-4 hidden space-x-3 xl:flex">
                        <Image
                            src={
                                c.group === ''
                                    ? require(
                                          `@images/courses/${c.courseCode}/icon.webp`
                                      )
                                    : require(
                                          `@images/courses/${c.courseCode}/${c.group}/${c.code}.webp`
                                      )
                            }
                            width={200}
                            style={{ objectFit: 'cover' }}
                            alt={c.code}
                            className="rounded-lg"
                            unoptimized
                        />
                        <div className="text-white">
                            <Text
                                variant="h5"
                                className="text-white drop-shadow-2xl"
                            >
                                {c.name}
                            </Text>
                            <Text
                                variant="p2"
                                className="mb-4 mt-1 text-gray-text drop-shadow-2xl"
                            >
                                {c.courseCode}
                            </Text>
                            <LikeButton heart={c.heart} id={c.id} show />
                        </div>
                    </div>

                    {/* mobile */}
                    <div className="mb-4 flex flex-col items-center space-y-3 xl:hidden">
                        <Image
                            src={
                                c.group === ''
                                    ? require(
                                          `@images/courses/${c.courseCode}/icon.webp`
                                      )
                                    : require(
                                          `@images/courses/${c.courseCode}/${c.group}/${c.code}.webp`
                                      )
                            }
                            style={{ objectFit: 'cover', width: '80%' }}
                            alt={c.code}
                            className="rounded-lg"
                            unoptimized
                        />
                        <div className="flex w-[80%] items-center space-x-10 text-white">
                            <div>
                                <Text
                                    variant="h5"
                                    className="text-white drop-shadow-2xl"
                                >
                                    {c.name}
                                </Text>
                                <Text
                                    variant="p2"
                                    className="mb-4 mt-1 text-gray-text drop-shadow-2xl"
                                >
                                    {c.courseCode}
                                </Text>
                            </div>
                            <LikeButton heart={c.heart} id={c.id} show />
                        </div>
                    </div>
                    <RatingForm handleClose={closeEditModal} />
                </DialogContent>
            )}
        </Dialog>
    );
};

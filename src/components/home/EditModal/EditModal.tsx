'use client';

import { Text } from '@/components/custom';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
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
                    className="bg-gray-400"
                >
                    <DialogHeader>
                        <div className="mb-4 flex space-x-3">
                            <Image
                                src={
                                    c.group === ''
                                        ? require(
                                              `@images/courses/${c.course}/icon.webp`
                                          )
                                        : require(
                                              `@images/courses/${c.course}/${c.group}/${c.code}.webp`
                                          )
                                }
                                width={200}
                                style={{ objectFit: 'cover' }}
                                alt={c.code}
                                className="rounded-lg"
                                unoptimized
                            />
                            <DialogTitle className="text-white">
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
                                    {c.course}
                                </Text>
                                <LikeButton heart={c.heart} id={c.id} show />
                            </DialogTitle>
                        </div>
                    </DialogHeader>
                    <RatingForm handleClose={closeEditModal} />
                </DialogContent>
            )}
        </Dialog>
    );
};

'use client';

import { Text } from '@/components/custom';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useDataContext } from '@/context/DataContext';
import { useOpenContext } from '@/context/OpenContext';
import { DialogClose } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';

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
                                width={100}
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
                                <HeartIcon className="h-6 w-6 hover:cursor-pointer" />
                                <HeartFilledIcon className="h-6 w-6 text-green hover:cursor-pointer" />
                            </DialogTitle>
                        </div>
                        <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-between">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="white"
                                onClick={closeEditModal}
                            >
                                Close
                            </Button>
                        </DialogClose>
                        <Button
                            type="button"
                            variant="green"
                            className="shadow-2xl"
                        >
                            Save
                        </Button>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    );
};

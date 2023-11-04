'use client';

import { Text } from '@/components/custom';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useDataContext } from '@/context/DataContext';
import { useOpenContext } from '@/context/OpenContext';
import { DialogClose } from '@radix-ui/react-dialog';

export const EditModal = () => {
    const { currentProblem } = useDataContext();
    const { isEditModalOpen, closeEditModal } = useOpenContext();
    return (
        <Dialog open={isEditModalOpen}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent
                onInteractOutside={closeEditModal}
                className="bg-gray-400"
            >
                <DialogHeader>
                    <DialogTitle className="text-white">
                        <Text
                            variant="h5"
                            className="text-white drop-shadow-2xl"
                        >
                            {currentProblem?.name}
                        </Text>
                        <Text
                            variant="p2"
                            className="mt-1 text-gray-text drop-shadow-2xl"
                        >
                            {currentProblem?.course}
                        </Text>
                    </DialogTitle>
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
        </Dialog>
    );
};

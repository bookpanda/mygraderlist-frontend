'use client';

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
    const { problems, currentCourse, courses } = useDataContext();
    const { isEditModalOpen, closeEditModal } = useOpenContext();
    return (
        <Dialog open={isEditModalOpen}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent
                onInteractOutside={closeEditModal}
                className="bg-gray-400"
            >
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={closeEditModal}
                    >
                        Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

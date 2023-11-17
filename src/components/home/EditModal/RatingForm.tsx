'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { useDataContext } from '@/context/data/DataContext';
import { DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface RatingFormProps {
    handleClose: () => void;
}

const scoreOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const difficultyOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const formSchema = z.object({
    score: z.string(),
    difficulty: z.string(),
});

export const RatingForm: FC<RatingFormProps> = ({ handleClose }) => {
    const { currentProblem, submitRating } = useDataContext();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            score: currentProblem?.scoreSelf.toString() ?? '0',
            difficulty: currentProblem?.difficultySelf.toString() ?? '0',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (
            !currentProblem ||
            values.score === '0' ||
            values.difficulty === '0'
        )
            return;
        submitRating(
            currentProblem.id,
            parseInt(values.score),
            parseInt(values.difficulty)
        );
        handleClose();
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="z-10 flex space-x-[20%]"
            >
                <FormField
                    control={form.control}
                    name="score"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-text">
                                Score
                            </FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={currentProblem?.scoreSelf.toString()}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-[100px] border-0 bg-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {scoreOptions.map((option) => (
                                        <SelectItem
                                            key={option}
                                            value={option.toString()}
                                        >
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-text">
                                Difficulty
                            </FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={currentProblem?.difficultySelf.toString()}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-[100px] border-0 bg-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {difficultyOptions.map((option) => (
                                        <SelectItem
                                            key={option}
                                            value={option.toString()}
                                        >
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
            </form>
            <div className="mt-6 flex justify-between">
                <DialogClose asChild>
                    <Button type="button" variant="white" onClick={handleClose}>
                        Close
                    </Button>
                </DialogClose>
                <Button
                    type="submit"
                    variant="green"
                    className="shadow-2xl"
                    onClick={() => {
                        onSubmit(form.getValues());
                    }}
                >
                    Save
                </Button>
            </div>
        </Form>
    );
};

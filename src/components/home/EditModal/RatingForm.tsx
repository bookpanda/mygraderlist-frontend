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

const scoreOptions = [1, 2, 3, 4, 5];

const formSchema = z.object({
    score: z.number(),
    difficulty: z.number(),
});

export const RatingForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            score: 0,
            difficulty: 0,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="z-10 space-y-6"
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
                                onValueChange={(e) => {
                                    field.onChange(e);
                                    onSubmit(form.getValues());
                                }}
                                defaultValue={field.value.toString()}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-[100px] border-0 bg-white">
                                        <SelectValue placeholder="Se" />
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
                                onValueChange={(e) => {
                                    field.onChange(e);
                                    onSubmit(form.getValues());
                                }}
                                defaultValue={field.value.toString()}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-[100px] border-0 bg-white">
                                        <SelectValue placeholder="Se" />
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
            </form>
        </Form>
    );
};

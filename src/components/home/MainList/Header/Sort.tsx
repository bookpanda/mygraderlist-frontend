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
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

const sortOptions = ['title', 'difficulty', 'score'];

const formSchema = z.object({
    sort: z.string(),
});

export const Sort = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            sort: 'title',
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
                    name="sort"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                onValueChange={(e) => {
                                    field.onChange(e);
                                    onSubmit(form.getValues());
                                }}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-[100px] border-0 bg-transparent text-gray-text">
                                        <SelectValue />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {sortOptions.map((option) => (
                                        <SelectItem
                                            key={option}
                                            className={
                                                field.value === option
                                                    ? 'text-green'
                                                    : ''
                                            }
                                            value={option}
                                        >
                                            {option.charAt(0).toUpperCase() +
                                                option.slice(1)}
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

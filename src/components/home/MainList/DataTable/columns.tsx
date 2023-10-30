'use client';

import { Problem } from '@/types/problem';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Problem>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'score',
        header: 'Score',
    },
    {
        accessorKey: 'difficulty',
        header: 'Difficulty',
    },
];

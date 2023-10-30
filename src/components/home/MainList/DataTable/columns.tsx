'use client';

import { Text } from '@/components/custom';
import { Problem } from '@/types/problem';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export const columns: ColumnDef<Problem>[] = [
    {
        accessorKey: 'id',
        header: () => <p className="font-light text-gray-text">#</p>,
        cell: ({ row }) => {
            return (
                <Text variant="p1" className="font-light text-gray-text">
                    <b>{row.original.id}</b>
                </Text>
            );
        },
    },
    {
        accessorKey: 'name',
        header: () => <p className="font-light text-gray-text">Name</p>,
        cell: ({ row }) => {
            return (
                <div className="flex space-x-3">
                    <Image
                        src={require('@images/courses/dataStruct.png')}
                        width={45}
                        style={{ objectFit: 'cover' }}
                        alt={row.original.code}
                    />
                    <div className="text-left font-medium">
                        <Text variant="p2" className="text-white">
                            <b>{row.original.name}</b>
                        </Text>
                        <Text variant="p3" className="text-gray-text">
                            {row.original.code}
                        </Text>
                    </div>
                </div>
            );
        },
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

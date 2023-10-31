'use client';

import { Text } from '@/components/custom';
import { Problem } from '@/types/problem';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export const columns: ColumnDef<Problem>[] = [
    {
        accessorKey: 'name',
        header: () => (
            <div className="flex space-x-3">
                <p className="mx-3 font-light text-gray-text">#</p>
                <p className="font-light text-gray-text">Name</p>
            </div>
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center space-x-3">
                    <Text
                        variant="p1"
                        className="mx-3 w-3 font-light text-gray-text"
                    >
                        <b>{row.original.id}</b>
                    </Text>
                    <Image
                        src={
                            row.original.group === ''
                                ? require('@images/courses/2110211/icon.webp')
                                : require(
                                      `@images/courses/${row.original.course}/${row.original.group}/${row.original.code}.webp`
                                  )
                        }
                        width={45}
                        style={{ objectFit: 'cover' }}
                        alt={row.original.code}
                    />
                    <div>
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
        header: () => <p className="font-light text-gray-text">Score</p>,
        cell: ({ row }) => {
            return (
                <Text variant="p1" className="text-gray-text">
                    {row.original.score}
                </Text>
            );
        },
    },
    {
        accessorKey: 'difficulty',
        header: () => <p className="font-light text-gray-text">Difficulty</p>,
        cell: ({ row }) => {
            return (
                <Text variant="p1" className="text-gray-text">
                    {row.original.difficulty}
                </Text>
            );
        },
    },
];

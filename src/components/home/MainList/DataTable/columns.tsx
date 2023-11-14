'use client';

import { Text } from '@/components/custom';
import { Problem } from '@/types/problem';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { ColHeader } from './ColHeader';

export const columns: ColumnDef<Problem>[] = [
    {
        accessorKey: 'order',
        header: ({ column }) => (
            <ColHeader column={column} className="w-12">
                <p className="mx-3 font-light text-gray-text">#</p>
            </ColHeader>
        ),
        cell: ({ row }) => {
            return (
                <div className="w-1">
                    <Text variant="p1" className="mx-3 font-light">
                        <b>{row.getVisibleCells()[0].id.split('_')[0]}</b>
                    </Text>
                </div>
            );
        },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <ColHeader column={column} className="space-x-3">
                <p className="font-light text-gray-text">Name</p>
            </ColHeader>
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center space-x-3">
                    <Image
                        src={
                            row.original.group === ''
                                ? require(
                                      `@images/courses/${row.original.courseCode}/icon.webp`
                                  )
                                : require(
                                      `@images/courses/${row.original.courseCode}/${row.original.group}/${row.original.code}.webp`
                                  )
                        }
                        width={45}
                        style={{ objectFit: 'cover' }}
                        alt={row.original.code}
                        unoptimized
                    />
                    <div>
                        <Text variant="p2">
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
        header: ({ column }) => (
            <ColHeader column={column} className="w-16 space-x-1">
                <p className="font-light text-gray-text">Score</p>
            </ColHeader>
        ),
        cell: ({ row }) => {
            return (
                <Text variant="p1" className="text-gray-text">
                    {row.original.scoreSelf === 0
                        ? '-'
                        : row.original.scoreSelf}
                </Text>
            );
        },
    },
    {
        accessorKey: 'avg_score',
        header: ({ column }) => (
            <ColHeader column={column} className="w-24 space-x-1">
                <p className="font-light text-gray-text">Avg. Score</p>
            </ColHeader>
        ),
        cell: ({ row }) => {
            return (
                <Text variant="p1" className="text-gray-text">
                    {row.original.score === 0
                        ? '-'
                        : (Math.round(row.original.score * 100) / 100).toFixed(
                              2
                          )}
                </Text>
            );
        },
    },
    {
        accessorKey: 'difficulty',
        header: ({ column }) => (
            <ColHeader column={column} className="w-20 space-x-1">
                <p className="font-light text-gray-text">Difficulty</p>
            </ColHeader>
        ),
        cell: ({ row }) => {
            return (
                <Text variant="p1" className="text-gray-text">
                    {row.original.difficultySelf === 0
                        ? '-'
                        : row.original.difficultySelf}
                </Text>
            );
        },
    },
    {
        accessorKey: 'avg_difficulty',
        header: ({ column }) => (
            <ColHeader column={column} className="w-28 space-x-1">
                <p className="font-light text-gray-text">Avg. Difficulty</p>
            </ColHeader>
        ),
        cell: ({ row }) => {
            return (
                <Text variant="p1" className="text-gray-text">
                    {row.original.difficulty === 0
                        ? '-'
                        : (
                              Math.round(row.original.difficulty * 100) / 100
                          ).toFixed(2)}
                </Text>
            );
        },
    },
];

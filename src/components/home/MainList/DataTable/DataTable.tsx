'use client';

import {
    ColumnDef,
    Row,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useDataContext } from '@/context/DataContext';
import { Problem } from '@/types/problem';
import clsx from 'clsx';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { useOpenContext } from '@/context/OpenContext';
import { LikeButton } from '../../LikeButton/LikeButton';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const { setCurrentProblem, currentProblem } = useDataContext();
    const { openEditModal } = useOpenContext();
    const handleClick = (row: Row<TData>) => {
        const data = row.getAllCells()[0].getContext().cell.row
            .original as Problem;
        setCurrentProblem(data);
    };
    const [selectedRow, setSelectedRow] = useState<string | null>(null);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow
                            key={headerGroup.id}
                            className="hover:bg-transparent"
                        >
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => {
                            const data = row.original as Problem;
                            return (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                    className="border-0 hover:bg-gray-hl/50"
                                    onMouseEnter={() => {
                                        setSelectedRow(row.id);
                                    }}
                                    onMouseLeave={() => {
                                        setSelectedRow(null);
                                    }}
                                    onClick={() => handleClick(row)}
                                >
                                    {row.getVisibleCells().map((cell) => {
                                        const id = cell.id.split('_')[1];
                                        let className = '';
                                        if (id === 'id') {
                                            className = clsx(
                                                'w-1',
                                                data.code ===
                                                    currentProblem?.code
                                                    ? 'text-green'
                                                    : 'text-gray-text'
                                            );
                                        } else if (id === 'name') {
                                            className = clsx(
                                                data.code ===
                                                    currentProblem?.code
                                                    ? 'text-green'
                                                    : 'text-white'
                                            );
                                        }
                                        return (
                                            <TableCell
                                                key={cell.id}
                                                className={className}
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                    <div className="flex h-20 w-20 items-center justify-center space-x-5">
                                        <LikeButton
                                            heart={data.heart}
                                            id={data.id}
                                            width={5}
                                        />
                                        <div className="w-1/2">
                                            <MoreHorizontal
                                                onClick={openEditModal}
                                                className={clsx(
                                                    'h-[50%] hover:h-[55%] hover:w-[65%] hover:cursor-pointer',
                                                    selectedRow === row.id
                                                        ? 'text-white'
                                                        : 'text-transparent'
                                                )}
                                            />
                                        </div>
                                    </div>
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow className="hover:bg-transparent">
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center text-gray-text"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

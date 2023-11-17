'use client';

import {
    ColumnDef,
    Row,
    flexRender,
    getCoreRowModel,
    useReactTable,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useDataContext } from '@/context/data/DataContext';
import { Problem } from '@/types/problem';
import clsx from 'clsx';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { useOpenContext } from '@/context/OpenContext';
import { LikeButton } from '../../LikeButton/LikeButton';
import { EmojiRow } from '../../EmojiRow/EmojiRow';
import { Input } from '@/components/ui/input';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const { setCurrentProblem, currentProblem } = useDataContext();
    const {
        isEnableProblemModal,
        openProblemModal,
        isProblemModalOpen,
        openEditModal,
    } = useOpenContext();
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [selectedRow, setSelectedRow] = useState<string | null>(null);

    const handleClick = (row: Row<TData>) => {
        const data = row.getAllCells()[0].getContext().cell.row
            .original as Problem;
        setCurrentProblem(data);
        if (isEnableProblemModal && !isProblemModalOpen) openProblemModal();
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    return (
        <div>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Search by name..."
                    value={
                        (table.getColumn('name')?.getFilterValue() as string) ??
                        ''
                    }
                    onChange={(event) =>
                        table
                            .getColumn('name')
                            ?.setFilterValue(event.target.value)
                    }
                    className="z-10 max-w-sm border-transparent bg-gray-60060 text-white"
                />
            </div>
            <Table className="mb-24 md:mb-0">
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
                                    {row.getVisibleCells().map((cell, idx) => {
                                        const id = cell.id.split('_')[1];
                                        let className = '';
                                        if (id === 'order') {
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
                                        if (idx === 1)
                                            return (
                                                <TableCell
                                                    key={cell.id}
                                                    className={clsx(
                                                        className,
                                                        'w-1/3 pt-10'
                                                    )}
                                                >
                                                    {flexRender(
                                                        cell.column.columnDef
                                                            .cell,
                                                        cell.getContext()
                                                    )}
                                                    <EmojiRow
                                                        id={data.id}
                                                        emojis={data.emojis}
                                                        emojisSelf={
                                                            data.emojisSelf
                                                        }
                                                    />
                                                </TableCell>
                                            );

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
                                    <div className="flex h-36 w-20 items-center justify-center space-x-5">
                                        <LikeButton
                                            heart={data.heart}
                                            id={data.id}
                                            show={selectedRow === row.id}
                                        />
                                        <div className="w-1/2">
                                            <MoreHorizontal
                                                onClick={openEditModal}
                                                className={clsx(
                                                    'h-[50%] hover:scale-110 hover:cursor-pointer',
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
                                No results
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

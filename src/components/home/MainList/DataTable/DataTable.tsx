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

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const { setFooter, footer } = useDataContext();
    const handleClick = (row: Row<TData>) => {
        const data = row.getAllCells()[0].getContext().cell.row
            .original as Problem;
        setFooter(data);
    };
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
                                    onClick={() => handleClick(row)}
                                >
                                    {row.getVisibleCells().map((cell) => {
                                        const id = cell.id.split('_')[1];
                                        let className = '';
                                        if (id === 'id') {
                                            className = clsx(
                                                'w-1',
                                                data.code === footer?.code
                                                    ? 'text-green'
                                                    : 'text-gray-text'
                                            );
                                        } else if (id === 'name') {
                                            className = clsx(
                                                data.code === footer?.code
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
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
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

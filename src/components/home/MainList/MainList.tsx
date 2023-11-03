'use client';

import { useDataContext } from '@/context/DataContext';
import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/columns';
import { Header } from './Header/Header';

export const MainList = () => {
    const { problems } = useDataContext();
    return (
        <div className="no-scrollbar h-full w-full overflow-auto rounded-t-xl bg-gray-600 ">
            <Header />
            <div className="p-4">
                {problems && <DataTable columns={columns} data={problems} />}
            </div>
        </div>
    );
};

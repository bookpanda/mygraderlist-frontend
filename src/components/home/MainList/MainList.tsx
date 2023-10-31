import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/columns';
import { Header } from './Header/Header';
import data from '@pubic/data.json';

export const MainList = () => {
    return (
        <div className="no-scrollbar h-full w-full overflow-auto rounded-t-xl bg-gray-600 ">
            <Header />
            <div className="p-4">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
};

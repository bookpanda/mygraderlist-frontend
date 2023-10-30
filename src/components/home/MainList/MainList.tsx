import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/columns';
import { Header } from './Header/Header';
import data from '@pubic/data.json';

export const MainList = () => {
    return (
        <div className="no-scrollbar h-full w-full overflow-auto rounded-t-xl bg-gray-400 ">
            <Header />
            <div className="p-4">
                <h1>MainList</h1>
                <DataTable columns={columns} data={data} />
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
            </div>
        </div>
    );
};

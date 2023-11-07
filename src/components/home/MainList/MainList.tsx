'use client';

import { useDataContext } from '@/context/DataContext';
import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/columns';
import { Header } from './Header/Header';

export const MainList = () => {
    const { problems, currentCourse, courses } = useDataContext();
    const currentProblems =
        currentCourse === 'liked'
            ? problems?.filter((p) => p.heart === 1)
            : problems?.filter((p) => p.course === currentCourse);

    const c = courses?.find((c) => c.course === currentCourse);
    return (
        <div className="no-scrollbar relative h-full w-full overflow-auto rounded-t-xl bg-gray-600">
            <div
                className="absolute h-2/3 w-full"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${c?.color}, ${c?.color}00)`,
                }}
            />
            <Header />
            <div className="p-4">
                {currentProblems && (
                    <DataTable columns={columns} data={currentProblems} />
                )}
            </div>
        </div>
    );
};

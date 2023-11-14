'use client';

import { useDataContext } from '@/context/DataContext';
import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/columns';
import { Header } from './Header/Header';
import { useOpenContext } from '@/context/OpenContext';
import clsx from 'clsx';

export const MainList = () => {
    const { problems, currentCourse } = useDataContext();
    const { isProblemModalOpen } = useOpenContext();
    const currentProblems =
        currentCourse?.courseCode === 'liked'
            ? problems?.filter((p) => p.heart === 1)
            : problems?.filter(
                  (p) => p.courseCode === currentCourse?.courseCode
              );

    const c = currentCourse;
    return (
        <div
            className={clsx(
                'no-scrollbar relative h-full grow overflow-scroll bg-gray-600 xl:rounded-xl',
                !isProblemModalOpen && 'w-full'
            )}
        >
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

'use client';

import { useDataContext } from '@/context/data/DataContext';
import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/columns';
import { Header } from './Header/Header';
import { useOpenContext } from '@/context/OpenContext';
import clsx from 'clsx';
import { nullColor } from '@/constants/nullColor';

export const MainList = () => {
    const { problems, currentCourse } = useDataContext();
    const { isProblemModalOpen } = useOpenContext();
    const currentProblems =
        currentCourse?.courseCode === 'liked'
            ? problems?.filter((p) => p.heart)
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
                    backgroundImage: `linear-gradient(to bottom, ${
                        c ? c.color : nullColor
                    }, ${c ? c.color : nullColor}00)`,
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

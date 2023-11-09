'use client';

import { useDataContext } from '@/context/DataContext';
import { CourseSelect } from './CourseSelect';

export const SideBar = () => {
    const { courses } = useDataContext();

    return (
        <>
            <div className="no-scrollbar hidden space-y-3 overflow-scroll rounded-lg bg-gray-600 p-2 md:block">
                {courses?.map((c) => <CourseSelect key={c.name} course={c} />)}
            </div>
            <div className="no-scrollbar block w-full space-y-4 overflow-scroll rounded-lg bg-gray-600 p-2 md:hidden">
                {courses?.map((c) => <CourseSelect key={c.name} course={c} />)}
            </div>
        </>
    );
};

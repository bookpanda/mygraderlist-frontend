'use client';

import { useDataContext } from '@/context/DataContext';
import { CourseSelect } from './CourseSelect';

export const SideBar = () => {
    const { courses } = useDataContext();

    return (
        <div className="no-scrollbar space-y-3 overflow-scroll rounded-lg bg-gray-600 p-2">
            {courses?.map((c) => <CourseSelect key={c.name} course={c} />)}
        </div>
    );
};

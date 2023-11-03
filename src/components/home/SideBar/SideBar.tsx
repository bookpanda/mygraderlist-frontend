'use client';

import { useDataContext } from '@/context/DataContext';
import { CourseIcon } from '../../custom/CourseIcon';

export const SideBar = () => {
    const { courses } = useDataContext();
    return (
        <div className="no-scrollbar space-y-3 overflow-scroll rounded-t-lg bg-gray-600 p-2">
            {courses?.map((c) => <CourseIcon key={c.name} course={c.course} />)}
        </div>
    );
};

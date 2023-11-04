'use client';

import { Text } from '@/components/custom';
import { CourseIcon } from '../../../custom/CourseIcon';
import { Sort } from './Sort';
import { useDataContext } from '@/context/DataContext';

export const Header = () => {
    const { courses, currentCourse } = useDataContext();
    const c = courses?.find((c) => c.course === currentCourse);
    return (
        <div className="w-full">
            {c && (
                <>
                    <div
                        className="-z-10 flex w-full items-center space-x-8 px-6 pb-5 pt-8"
                        style={{ backgroundColor: `${c.color}` }}
                    >
                        <CourseIcon
                            course={c.course}
                            className="drop-shadow-xl"
                            width={180}
                        />

                        <div className="z-10">
                            <Text
                                variant="h1"
                                className="text-white drop-shadow-2xl"
                            >
                                {c.name}
                            </Text>
                            <Text
                                variant="p1"
                                className="ml-1 mt-1 text-white drop-shadow-2xl"
                            >
                                {c.course !== 'liked' && c.course}
                            </Text>
                        </div>
                    </div>
                    <div className="z-10 flex w-full justify-end px-6 pt-8">
                        <Sort />
                    </div>
                </>
            )}
        </div>
    );
};

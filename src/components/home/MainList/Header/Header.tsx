'use client';

import { Text } from '@/components/custom';
import { CourseIcon } from '../../../custom/CourseIcon';
import { useDataContext } from '@/context/data/DataContext';
import { Login } from './Login';
import { Skeleton } from '@/components/ui/skeleton';
import { nullColor } from '@/constants/nullColor';

export const Header = () => {
    const { currentCourse } = useDataContext();
    const c = currentCourse;

    return (
        <div className="w-full">
            <div
                className="flex flex-col justify-between px-6 pb-5 pt-4"
                style={{
                    backgroundImage: `linear-gradient(to top right, ${
                        c ? c.color : nullColor
                    }40, ${c ? c.color : nullColor})`,
                }}
            >
                <Login />
                <div className="flex items-center space-x-8">
                    {c ? (
                        <CourseIcon
                            course={c}
                            className="drop-shadow-xl"
                            width={180}
                        />
                    ) : (
                        <Skeleton className="h-[180px] w-[180px]" />
                    )}

                    <div className="z-10">
                        {c ? (
                            <Text
                                variant="h1"
                                className="text-white drop-shadow-2xl"
                            >
                                {c.name}
                            </Text>
                        ) : (
                            <Skeleton className="h-16 w-64" />
                        )}
                        {c ? (
                            <Text
                                variant="p1"
                                className="ml-1 mt-1 text-white drop-shadow-2xl"
                            >
                                {c.courseCode !== 'liked' && c.courseCode}
                            </Text>
                        ) : (
                            <Skeleton className="ml-1 mt-1 h-8 w-24" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

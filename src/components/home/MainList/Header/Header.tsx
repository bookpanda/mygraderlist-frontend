'use client';

import { Text } from '@/components/custom';
import { CourseIcon } from '../../../custom/CourseIcon';
import { useDataContext } from '@/context/DataContext';
import { Login } from './Login';

export const Header = () => {
    const { courses, currentCourse } = useDataContext();
    const c = courses?.find((c) => c.course === currentCourse);
    return (
        <div className="w-full">
            {c && (
                <div
                    className="flex flex-col justify-between px-6 pb-5 pt-4"
                    style={{
                        backgroundImage: `linear-gradient(to top right, ${c?.color}40, ${c?.color})`,
                    }}
                >
                    <Login />
                    <div className="flex items-center space-x-8">
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
                </div>
            )}
        </div>
    );
};

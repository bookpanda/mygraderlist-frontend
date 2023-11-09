'use client';

import { useDataContext } from '@/context/DataContext';
import { CourseSelect } from './CourseSelect';
import { Text } from '@/components/custom';
import Image from 'next/image';
import clsx from 'clsx';

export const SideBar = () => {
    const { courses, currentCourse, setCurrentCourse } = useDataContext();

    return (
        <>
            <div className="no-scrollbar hidden space-y-3 overflow-scroll rounded-lg bg-gray-600 p-2 md:block">
                {courses?.map((c) => <CourseSelect key={c.name} course={c} />)}
            </div>
            <div className="no-scrollbar block w-full space-y-4 overflow-scroll rounded-lg bg-gray-600 p-2 md:hidden">
                <Text variant="h3" className="mt-8 text-white">
                    Courses
                </Text>
                {courses &&
                    courses.map((c) => (
                        <div
                            className="flex space-x-3"
                            onClick={() => setCurrentCourse(c)}
                        >
                            <Image
                                src={require(
                                    `@images/courses/${c.course}/icon.webp`
                                )}
                                alt="data-struct"
                                width={60}
                                height={60}
                                unoptimized
                            />
                            <div className="flex flex-col justify-center">
                                <Text
                                    variant="p1"
                                    className={clsx(
                                        currentCourse?.course === c.course
                                            ? 'text-green'
                                            : 'text-white'
                                    )}
                                >
                                    {c.name}
                                </Text>
                                <Text variant="p2" className="text-gray-text">
                                    {c.course !== 'liked' && c.course}
                                </Text>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

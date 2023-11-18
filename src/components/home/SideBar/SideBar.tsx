'use client';

import { useDataContext } from '@/context/data/DataContext';
import { CourseSelect } from './CourseSelect';
import { Text } from '@/components/custom';
import Image from 'next/image';
import clsx from 'clsx';
import { Skeleton } from '@/components/ui/skeleton';

export const SideBar = () => {
    const n = 3;
    const { courses, currentCourse, setCurrentCourse } = useDataContext();

    return (
        <>
            <div className="no-scrollbar hidden flex-none flex-col items-center space-y-3 overflow-scroll rounded-lg bg-gray-600 p-2 xl:flex">
                {courses ? (
                    courses?.map((c) => (
                        <CourseSelect key={c.name} course={c} />
                    ))
                ) : (
                    <>
                        {[...Array(n)].map((i) => (
                            <Skeleton
                                key={i}
                                style={{ width: 60, height: 60 }}
                            />
                        ))}
                    </>
                )}
            </div>
            <div className="no-scrollbar block w-full space-y-4 overflow-scroll rounded-lg bg-gray-600 px-4 py-2 xl:hidden">
                <Text variant="h3" className="mt-8 text-white">
                    Courses
                </Text>
                {courses ? (
                    courses.map((c) => (
                        <div
                            className="flex space-x-3"
                            onClick={() => setCurrentCourse(c)}
                            key={c.name}
                        >
                            <Image
                                src={require(
                                    `@images/courses/${c.courseCode}/icon.webp`
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
                                        currentCourse?.courseCode ===
                                            c.courseCode
                                            ? 'text-green'
                                            : 'text-white'
                                    )}
                                >
                                    {c.name}
                                </Text>
                                <Text variant="p2" className="text-gray-text">
                                    {c.courseCode !== 'liked' && c.courseCode}
                                </Text>
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        {[...Array(n)].map((i) => (
                            <Skeleton
                                key={i}
                                style={{ width: 60, height: 60 }}
                            />
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

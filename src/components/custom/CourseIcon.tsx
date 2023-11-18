import { RoundDiv } from '@/components/custom';
import { Course } from '@/types/course';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import { Skeleton } from '../ui/skeleton';

interface CourseIconProps {
    course: Course | null;
    className?: string;
    width?: number;
    height?: number;
}

export const CourseIcon: FC<CourseIconProps> = ({
    course,
    className,
    width,
    height,
}) => {
    return (
        <RoundDiv className={clsx('p-0', className)}>
            {course ? (
                <Image
                    src={require(
                        `@images/courses/${course.courseCode}/icon.webp`
                    )}
                    alt="data-struct"
                    width={width ?? 60}
                    height={height ?? 60}
                    className="rounded-md"
                    unoptimized
                />
            ) : (
                <Skeleton
                    className="h-10 w-10"
                    style={{ width: width ?? 60, height: height ?? 60 }}
                />
            )}
        </RoundDiv>
    );
};

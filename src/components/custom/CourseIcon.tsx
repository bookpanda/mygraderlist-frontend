import { RoundDiv } from '@/components/custom';
import { Course } from '@/types/problem';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

interface CourseIconProps {
    course: Course;
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
            {course && (
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
            )}
        </RoundDiv>
    );
};

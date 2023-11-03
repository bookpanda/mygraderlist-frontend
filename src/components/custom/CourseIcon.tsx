import { RoundDiv } from '@/components/custom';
import { dataStructure } from '@images/courses';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

interface CourseIconProps {
    course: string;
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
        <RoundDiv className={clsx('rounded-lg bg-gray-400 p-0', className)}>
            <Image
                src={require(`@images/courses/${course}/icon.webp`)}
                alt="data-struct"
                width={width ?? 60}
                height={height ?? 60}
                className="rounded-md"
                unoptimized
            />
        </RoundDiv>
    );
};
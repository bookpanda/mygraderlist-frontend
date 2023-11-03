import { CourseIcon } from '@/components/custom';
import { FC } from 'react';

interface CourseSelectProps {
    course: string;
}

export const CourseSelect: FC<CourseSelectProps> = ({ course }) => {
    return <CourseIcon course={course} />;
};

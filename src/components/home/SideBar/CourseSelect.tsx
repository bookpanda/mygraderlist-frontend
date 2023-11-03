import { CourseIcon, Text } from '@/components/custom';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { useDataContext } from '@/context/DataContext';
import { Course } from '@/types/problem';
import { FC } from 'react';

interface CourseSelectProps {
    course: Course;
}

export const CourseSelect: FC<CourseSelectProps> = ({ course }) => {
    const { setCurrentCourse } = useDataContext();
    const handleClick = () => {
        setCurrentCourse(course.course);
    };
    return (
        <TooltipProvider delayDuration={50}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div onClick={() => handleClick()}>
                        <CourseIcon course={course.course} />
                    </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="border-0 bg-gray-400">
                    <Text variant="p2" className="text-white">
                        <b>{course.name}</b>
                    </Text>
                    <Text variant="p3" className="text-gray-text">
                        {course.course}
                    </Text>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

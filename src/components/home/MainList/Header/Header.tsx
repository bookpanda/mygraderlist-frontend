import { Text } from '@/components/custom';
import { CourseIcon } from '../../../custom/CourseIcon';
import { Sort } from './Sort';
import { useDataContext } from '@/context/DataContext';

export const Header = () => {
    const { courses } = useDataContext();
    return (
        <div className="w-full">
            <div className="flex w-full items-center space-x-8 bg-blue-400 px-6 pb-5 pt-12">
                {courses && (
                    <CourseIcon
                        course={courses[0].course}
                        className="drop-shadow-xl"
                        width={180}
                    />
                )}
                <div>
                    <Text variant="h1" className="text-white">
                        Data Structure
                    </Text>
                    <Text variant="p1" className="ml-1 mt-1 text-white">
                        2110211
                    </Text>
                </div>
            </div>
            <div className="flex w-full justify-end px-6 pt-8">
                <Sort />
            </div>
        </div>
    );
};

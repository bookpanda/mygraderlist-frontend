import { Text } from '@/components/custom';
import { CourseIcon } from '../../SideBar/CourseIcon';
import { Sort } from './Sort';

export const Header = () => {
    return (
        <div className="w-full">
            <div className="flex w-full items-center space-x-8 bg-blue-400 px-6 pb-5 pt-12">
                <CourseIcon className="drop-shadow-xl" width={180} />
                <div>
                    <Text variant="h1">Data Structure</Text>
                    <Text variant="p" className="ml-1 mt-1">
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

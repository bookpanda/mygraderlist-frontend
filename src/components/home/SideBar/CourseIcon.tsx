import { RoundDiv } from '@/components/custom';
import { dataStructure } from '@images/courses';
import Image from 'next/image';

export const CourseIcon = () => {
    return (
        <RoundDiv className="p-1">
            <Image
                src={dataStructure}
                alt="data-struct"
                width={60}
                className="rounded-md"
                unoptimized
            />
        </RoundDiv>
    );
};

import { Problem } from '@/types/problem';
import Image from 'next/image';
import { FC, useState } from 'react';
import { ToggleProblemModal } from './ToggleProblemModal';

interface FooterImageProps {
    problem: Problem;
}

export const FooterImage: FC<FooterImageProps> = ({ problem }) => {
    const [isVisbible, setIsVisible] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => {
                setIsVisible(true);
            }}
            onMouseLeave={() => {
                setIsVisible(false);
            }}
        >
            {isVisbible && <ToggleProblemModal />}
            <Image
                src={
                    problem.group === ''
                        ? require(
                              `@images/courses/${problem.courseCode}/icon.webp`
                          )
                        : require(
                              `@images/courses/${problem.courseCode}/${problem.group}/${problem.code}.webp`
                          )
                }
                width={60}
                height={60}
                style={{ objectFit: 'cover' }}
                className="rounded-md"
                alt="current_problem"
                unoptimized
            />
        </div>
    );
};

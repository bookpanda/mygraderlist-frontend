import { FC } from 'react';
import { HomeIcon, TableIcon } from '@radix-ui/react-icons';

interface TabsButtonProps {
    text: 'Home' | 'Courses';
}

export const TabsButton: FC<TabsButtonProps> = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            {text === 'Home' && <HomeIcon width={30} height={30} />}
            {text === 'Courses' && <TableIcon width={30} height={30} />}
            {text}
        </div>
    );
};

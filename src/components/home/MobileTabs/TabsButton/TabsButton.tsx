import { FC } from 'react';
import { HomeIcon, TableIcon } from '@radix-ui/react-icons';
import { TabsTrigger } from '@/components/ui/tabs';
import clsx from 'clsx';

interface TabsButtonProps {
    text: 'home' | 'courses';
    active: boolean;
}

export const TabsButton: FC<TabsButtonProps> = ({ text, active }) => {
    return (
        <TabsTrigger value={text} style={{ backgroundColor: 'transparent' }}>
            <div
                className={clsx(
                    'flex flex-col items-center justify-center',
                    active ? 'text-white' : 'text-gray-text'
                )}
            >
                {text === 'home' && <HomeIcon width={30} height={30} />}
                {text === 'courses' && <TableIcon width={30} height={30} />}
                {text}
            </div>
        </TabsTrigger>
    );
};

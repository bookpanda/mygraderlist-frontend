import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface RoundBoxProps extends PropsWithChildren {
    className?: string;
}

export const RoundDiv: FC<RoundBoxProps> = ({ className, children }) => {
    return (
        <div className={clsx('rounded-lg bg-gray-400', className)}>
            {children}
        </div>
    );
};

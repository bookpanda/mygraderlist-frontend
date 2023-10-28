import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface RoundBoxProps extends PropsWithChildren {
    className?: string;
}

export const RoundDiv: FC<RoundBoxProps> = ({ className, children }) => {
    return <div className={clsx('rounded-xl p-4', className)}>{children}</div>;
};

import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface TextProps extends PropsWithChildren {
    className?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3';
}

export const Text: FC<TextProps> = ({ className, children, variant }) => {
    return (
        <>
            {variant === 'h1' && (
                <h1 className={clsx('text-6xl font-bold', className)}>
                    {children}
                </h1>
            )}
            {variant === 'h2' && (
                <h2 className={clsx('text-5xl font-bold', className)}>
                    {children}
                </h2>
            )}
            {variant === 'h5' && (
                <h2 className={clsx('text-xl font-bold', className)}>
                    {children}
                </h2>
            )}
            {variant === 'p1' && (
                <p className={clsx('text-md', className)}>{children}</p>
            )}
            {variant === 'p2' && (
                <p className={clsx('text-md font-extralight', className)}>
                    {children}
                </p>
            )}
            {variant === 'p3' && (
                <p className={clsx('text-sm font-extralight', className)}>
                    {children}
                </p>
            )}
        </>
    );
};

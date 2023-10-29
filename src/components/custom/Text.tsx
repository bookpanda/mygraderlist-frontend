import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface TextProps extends PropsWithChildren {
    className?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Text: FC<TextProps> = ({ className, children, variant }) => {
    return (
        <>
            {variant === 'h1' && (
                <h1
                    className={clsx('text-6xl font-bold text-white', className)}
                >
                    {children}
                </h1>
            )}
            {variant === 'h2' && (
                <h1
                    className={clsx('text-5xl font-bold text-white', className)}
                >
                    {children}
                </h1>
            )}
        </>
    );
};

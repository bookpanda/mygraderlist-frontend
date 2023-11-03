'use client';

import { Text } from '@/components/custom';
import { useDataContext } from '@/context/DataContext';
import Image from 'next/image';

export const Footer = () => {
    const { footer } = useDataContext();
    return (
        <div className="absolute bottom-0 left-0 z-10 flex w-full bg-gray-800 p-4">
            {footer && (
                <Image
                    src={
                        footer.group === ''
                            ? require(
                                  `@images/courses/${footer.course}/icon.webp`
                              )
                            : require(
                                  `@images/courses/${footer.course}/${footer.group}/${footer.code}.webp`
                              )
                    }
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', borderRadius: '8%' }}
                    alt="current_problem"
                    unoptimized
                />
            )}
            <div className="ml-4 py-2">
                <Text variant="p1" className="text-white">
                    {footer?.name}
                </Text>
                <Text variant="p3" className="text-gray-text">
                    {footer?.code}
                </Text>
            </div>
        </div>
    );
};

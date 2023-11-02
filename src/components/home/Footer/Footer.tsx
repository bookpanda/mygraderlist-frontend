'use client';

import { Text } from '@/components/custom';
import { useHomeContext } from '@/context/HomeContext';
import Image from 'next/image';

export const Footer = () => {
    const { footer } = useHomeContext();
    return (
        <div className="absolute bottom-0 left-0 z-10 flex w-full bg-gray-800 p-4">
            {footer?.image && (
                <Image
                    src={footer.image}
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

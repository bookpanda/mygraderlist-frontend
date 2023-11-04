import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import React from 'react';
import { DataContextProvider } from '@/context/DataProvider';
import { OpenContextProvider } from '@/context/OpenProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MyGraderList',
    description: 'โจทย์งอกมาอีกละ 🌱💀',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <DataContextProvider>
            <OpenContextProvider>
                <html lang="en">
                    <body className={inter.className}>
                        <div className="box-border h-screen w-screen bg-gray-800 px-4">
                            {children}
                            <Toaster />
                        </div>
                    </body>
                </html>
            </OpenContextProvider>
        </DataContextProvider>
    );
}

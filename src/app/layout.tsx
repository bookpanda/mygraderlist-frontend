import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import React from 'react';
import { HomeContextProvider } from '@/context/HomeProvider';

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
        <HomeContextProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="box-border h-screen w-screen bg-gray-800 px-4">
                        {children}
                    </div>
                </body>
            </html>
        </HomeContextProvider>
    );
}

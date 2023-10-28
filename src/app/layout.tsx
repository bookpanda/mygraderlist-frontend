import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import React from 'react';

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
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-gray-800 px-4 pt-8">{children}</div>
            </body>
        </html>
    );
}

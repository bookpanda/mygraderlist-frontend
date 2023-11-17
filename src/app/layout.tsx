import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import React from 'react';
import { DataContextProvider } from '@/context/data/DataProvider';
import { OpenContextProvider } from '@/context/OpenProvider';
import { Toaster } from '@/components/ui/toaster';
import { AuthContextProvider } from '@/context/AuthProvider';
import { Analytics } from '@vercel/analytics/react';

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
        <AuthContextProvider>
            <DataContextProvider>
                <OpenContextProvider>
                    <html lang="en">
                        <link
                            rel="apple-touch-icon"
                            sizes="180x180"
                            href="favicon/apple-touch-icon.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="32x32"
                            href="favicon/favicon-32x32.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="16x16"
                            href="favicon/favicon-16x16.png"
                        />
                        <link rel="manifest" href="/site.webmanifest" />
                        <link
                            rel="mask-icon"
                            href="favicon/safari-pinned-tab.svg"
                            color="#5bbad5"
                        />
                        <meta
                            name="msapplication-TileColor"
                            content="#da532c"
                        />
                        <meta name="theme-color" content="#ffffff" />
                        <body className={inter.className}>
                            <div className="box-border h-screen w-screen bg-gray-800">
                                {children}
                                <Analytics />
                                <Toaster />
                            </div>
                        </body>
                    </html>
                </OpenContextProvider>
            </DataContextProvider>
        </AuthContextProvider>
    );
}

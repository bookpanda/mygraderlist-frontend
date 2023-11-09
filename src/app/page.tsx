'use client';

import { Footer, MainList, SideBar } from '@/components/home';
import { EditModal } from '@/components/home/EditModal/EditModal';
import { EmojiModal } from '@/components/home/EmojiRow/EmojiModal';
import { ProblemModal } from '@/components/home/ProblemModal/ProblemModal';
import { MobileTabs } from '@/components/home/MobileTabs/MobileTabs';

export default function Home() {
    return (
        <>
            <EditModal />
            <div className="hidden h-screen w-full pt-8 xl:block">
                <div className="flex h-[90%] space-x-2">
                    <SideBar />
                    <MainList />
                    <EmojiModal />
                    <ProblemModal />
                </div>
                <Footer />
            </div>
            <MobileTabs />
        </>
    );
}

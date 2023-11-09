'use client';

import { Footer, MainList, SideBar } from '@/components/home';
import { EditModal } from '@/components/home/EditModal/EditModal';
import { EmojiModal } from '@/components/home/EmojiRow/EmojiModal';
import { ProblemModal } from '@/components/home/ProblemModal/ProblemModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
            <Tabs defaultValue="list" className="block h-full w-full md:hidden">
                <TabsContent value="list" className="h-[90%] w-full">
                    <div className="flex h-[90%] space-x-2">
                        <MainList />
                        <EmojiModal />
                        <ProblemModal />
                    </div>
                </TabsContent>
                <TabsContent value="courses">
                    <SideBar />
                </TabsContent>
                <TabsList>
                    <TabsTrigger value="list">List</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                </TabsList>
                <Footer />
            </Tabs>
        </>
    );
}

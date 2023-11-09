'use client';

import { Footer, MainList, SideBar } from '@/components/home';
import { EditModal } from '@/components/home/EditModal/EditModal';
import { EmojiModal } from '@/components/home/EmojiRow/EmojiModal';
import { ProblemModal } from '@/components/home/ProblemModal/ProblemModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
    return (
        <>
            <div className="hidden h-screen w-full pt-8 xl:block">
                <div className="flex h-[90%] space-x-2">
                    <SideBar />
                    <MainList />
                    <EmojiModal />
                    <ProblemModal />
                </div>
                <Footer />
                <EditModal />
            </div>
            {/* {viewport.sm && (
                <>
                    <Tabs defaultValue="account" className="h-full w-full">
                        <TabsContent value="account" className="h-full w-full">
                            <div className="flex h-[90%] space-x-2">
                                <SideBar />
                                <MainList />
                                <EmojiModal />
                                <ProblemModal />
                            </div>
                            <Footer />
                            <EditModal />
                        </TabsContent>
                        <TabsContent value="password">
                            Change your password here.
                        </TabsContent>
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </>
            )} */}
        </>
    );
}

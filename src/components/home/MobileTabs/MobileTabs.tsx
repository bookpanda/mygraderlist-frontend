import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import { Footer, MainList, SideBar } from '..';
import { EmojiModal } from '../EmojiRow/EmojiModal';
import { ProblemModal } from '../ProblemModal/ProblemModal';
import { TabsButton } from './TabsButton/TabsButton';
import { useState } from 'react';

export const MobileTabs = () => {
    const [currentTab, setCurrentTab] = useState('home');
    return (
        <Tabs
            defaultValue="home"
            className="block h-full w-full md:hidden"
            onValueChange={(val) => {
                setCurrentTab(() => val);
            }}
        >
            <TabsContent value="home" className="h-[92%] w-full">
                <div className="h-[97%]">
                    <MainList />
                    <EmojiModal />
                    <ProblemModal />
                </div>
            </TabsContent>
            <TabsContent value="courses" className="h-[92%] w-full">
                <div className="flex h-[97%]">
                    <SideBar />
                </div>
            </TabsContent>
            <TabsList className="absolute bottom-[2%] flex w-[94%] justify-center space-x-[20%] bg-transparent">
                <TabsButton text="home" active={currentTab === 'home'} />
                <TabsButton text="courses" active={currentTab === 'courses'} />
            </TabsList>
            <Footer />
        </Tabs>
    );
};

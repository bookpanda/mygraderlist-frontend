import { Footer, MainList, SideBar } from '@/components/home';
import { EditModal } from '@/components/home/EditModal/EditModal';
import { EmojiModal } from '@/components/home/EmojiRow/EmojiModal';

export default function Home() {
    return (
        <div className="h-screen w-full pt-8">
            <div className="flex h-[90%] justify-between space-x-2">
                <SideBar />
                <MainList />
                <EmojiModal />
            </div>
            <Footer />
            <EditModal />
        </div>
    );
}

import { Footer, MainList, SideBar } from '@/components/home';
import { EditModal } from '@/components/home/EditModal/EditModal';
import { EmojiModal } from '@/components/home/EmojiRow/EmojiModal';
import { ProblemModal } from '@/components/home/ProblemModal/ProblemModal';

export default function Home() {
    return (
        <div className="h-screen w-full pt-8">
            <div className="flex h-[90%] space-x-2">
                <SideBar />
                <MainList />
                <EmojiModal />
                <ProblemModal />
            </div>
            <Footer />
            <EditModal />
        </div>
    );
}

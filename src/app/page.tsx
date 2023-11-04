import { Footer, MainList, SideBar } from '@/components/home';
import { EditModal } from '@/components/home/EditModal/EditModal';

export default function Home() {
    return (
        <div className="h-screen w-full pt-8">
            <div className="flex h-[90%] justify-between space-x-2">
                <SideBar />
                <MainList />
            </div>
            <Footer />
            <EditModal />
        </div>
    );
}

import { Footer, MainList, SideBar } from '@/components/home';

export default function Home() {
    return (
        <div className="h-screen w-full pt-8">
            <div className="flex h-full justify-between space-x-2">
                <SideBar />
                <MainList />
            </div>
            <Footer />
        </div>
    );
}

import { Footer, MainList, SideBar } from '@/components/home';

export default function Home() {
    return (
        <div className="flex h-screen flex-col justify-between pt-8">
            <div className="flex h-[88%] space-x-2 bg-muted">
                <SideBar />
                <MainList />
            </div>
            <Footer />
        </div>
    );
}

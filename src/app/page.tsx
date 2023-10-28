import { MainList, SideBar } from '@/components/home';

export default function Home() {
    return (
        <div className="flex h-screen space-x-2 bg-muted">
            <SideBar />
            <MainList />
        </div>
    );
}

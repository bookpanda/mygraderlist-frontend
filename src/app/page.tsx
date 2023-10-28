import { MainList, SideBar } from '@/components/home';

export default function Home() {
    return (
        <div className="flex space-x-2 bg-muted">
            <SideBar />
            <MainList />
        </div>
    );
}

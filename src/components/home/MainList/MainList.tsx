import { Button } from '@ui/button';
import { Header } from './Header';

export const MainList = () => {
    return (
        <div className="no-scrollbar h-full w-full overflow-auto rounded-t-xl bg-gray-400 ">
            <Header />
            <div className="p-4">
                <h1>MainList</h1>
                <Button className="bg-primary">primary</Button>
                <Button className="bg-secondary">primary</Button>
                <Button className="bg-destructive">destructive</Button>
                <Button className="bg-muted">muted</Button>
                <Button className="bg-accent">accent</Button>
                <Button className="bg-popover">popover</Button>
                <Button className="bg-card">card</Button>
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
                <div className="h-80 bg-red-100">a</div>
            </div>
        </div>
    );
};

import { Button } from '@ui/button';

export const MainList = () => {
    return (
        <div className="bg-pink-100">
            <h1>MainList</h1>
            <Button className="bg-primary">primary</Button>
            <Button className="bg-secondary">primary</Button>
            <Button className="bg-destructive">destructive</Button>
            <Button className="bg-muted">muted</Button>
            <Button className="bg-accent">accent</Button>
            <Button className="bg-popover">popover</Button>
            <Button className="bg-card">card</Button>
        </div>
    );
};

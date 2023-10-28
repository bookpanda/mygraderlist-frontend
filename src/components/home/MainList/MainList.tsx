import { RoundDiv } from '@/components/custom';
import { Button } from '@ui/button';

export const MainList = () => {
    return (
        <RoundDiv className="rounded-xl bg-pink-200 p-4">
            <h1>MainList</h1>
            <Button className="bg-primary">primary</Button>
            <Button className="bg-secondary">primary</Button>
            <Button className="bg-destructive">destructive</Button>
            <Button className="bg-muted">muted</Button>
            <Button className="bg-accent">accent</Button>
            <Button className="bg-popover">popover</Button>
            <Button className="bg-card">card</Button>
        </RoundDiv>
    );
};

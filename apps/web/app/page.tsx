import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../@/components/ui/alert'
import { Button } from '../@/components/ui/button'
import styles from './page.module.css'

export default function Page(): JSX.Element {
    return (
        <main className={styles.main}>
            <p>
                examples/basic&nbsp;
                <code className={styles.code}>web</code>
            </p>
            <Button variant="secondary">Click me</Button>
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        </main>
    )
}

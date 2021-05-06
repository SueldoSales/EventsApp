import Link from 'next/link';

import styles from './main-header.module.css';

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Events App</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Todos os Eventos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
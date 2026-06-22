import Link from 'next/link'
import styles from './Header.module.css'


export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <span>Les petits plats</span>
                <span className={styles.logoIcon} aria-hidden="true"></span>
            </Link>
        </header>
    )
}
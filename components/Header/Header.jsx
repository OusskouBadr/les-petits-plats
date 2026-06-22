import Link from 'next/link'
import styles from './Header.module.css'


export default function Header() {
    return (
        <header>
            <Link href="/">
                <span>Les petits plats</span>
            </Link>
        </header>
    )
}
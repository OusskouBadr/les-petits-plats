import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <main className={styles.notFoundPage}>
            <section className={styles.notFoundHero}>
            <div className={styles.content}>
                <h1>404 :(</h1>
                <p>La page que vous demandez est introuvable.</p>

                <Link href="/" className={styles.homeLink}>
                    Retour à l’accueil
                </Link>
            </div>

            </section>
        </main>
    )
}
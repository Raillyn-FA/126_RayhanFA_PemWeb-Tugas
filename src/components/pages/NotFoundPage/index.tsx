import { Link } from "react-router"
import styles from "./styles.module.css"

export default function NotFoundPage() {
    return (
        <section className={styles.page}>
            <h1 className={styles.title}>404: Halaman tidak ditemukan</h1>
            <p className={styles.text}>
                Alamat yang kamu buka tidak cocok dengan halaman mana pun.
            </p>
            <Link to="/products" className={`${styles.link} btn-primary`}>
                Kembali ke produk
            </Link>
        </section>
    )
}

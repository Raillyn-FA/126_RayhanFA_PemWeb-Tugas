import { Link, useParams } from "react-router"
import type { Product } from "../../../types/product"
import { formatRupiah } from "../../../utils/formatRupiah"
import styles from "./styles.module.css"

type Props = { products: Product[] }

export default function ProductDetailPage({ products }: Props) {
    const { id } = useParams() // id bernilai string, misalnya "2"
    const product = products.find((item) => String(item.id) === id)

    if (!product) {
        return (
            <section>
                <h1 className={styles.title}>Produk tidak ditemukan.</h1>
                <p className={styles.text}>
                    Produk dengan ID {id} tidak ada atau sudah dihapus.
                </p>
                <Link to="/products" className={styles.back}>
                    ← Kembali ke produk
                </Link>
            </section>
        )
    }

    return (
        <section>
            <Link to="/products" className={styles.back}>
                ← Kembali ke produk
            </Link>
            <article className={styles.card}>
                <span className={styles.id}>ID: {product.id}</span>
                <h1 className={styles.title}>{product.name}</h1>
                <p className={styles.price}>{formatRupiah(product.price)}</p>
            </article>
        </section>
    )
}

import { Link } from "react-router"
import { TbPackage } from "react-icons/tb"
import type { Product } from "../../../types/product"
import type { ViewMode } from "../../../types/view-mode"
import Button from "../../atoms/Button"
import { formatRupiah } from "../../../utils/formatRupiah"
import styles from "./styles.module.css"

type Props = {
    product: Product
    viewMode: ViewMode
    onEdit: (product: Product) => void
    onDelete: (product: Product) => void
}

export default function ProductCard({
    product,
    viewMode,
    onEdit,
    onDelete,
}: Props) {
    return (
        <article
            className={`${styles.card} ${viewMode === "list" ? styles.list : ""}`}
        >
            <div className={styles.info}>
                <div className={styles.header}>
                    <span className={styles.id}>ID: {product.id}</span>
                    <TbPackage className={styles.icon} aria-hidden="true" />
                </div>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.price}>{formatRupiah(product.price)}</p>
            </div>
            <div className={styles.actions}>
                <Link
                    to={`/products/${product.id}`}
                    className={`${styles.detail} btn-secondary`}
                >
                    Detail
                </Link>
                <Button variant="secondary" onClick={() => onEdit(product)}>
                    Edit
                </Button>
                <Button
                    variant="subtleDanger"
                    onClick={() => onDelete(product)}
                >
                    Hapus
                </Button>
            </div>
        </article>
    )
}

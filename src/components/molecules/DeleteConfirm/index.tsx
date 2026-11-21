import type { Product } from "../../../types/product"
import Button from "../../atoms/Button"
import { formatRupiah } from "../../../utils/formatRupiah"
import styles from "./styles.module.css"

type Props = {
    product: Product
    onConfirm: () => void
    onCancel: () => void
}

export default function DeleteConfirm({ product, onConfirm, onCancel }: Props) {
    return (
        <div>
            <div className={styles.summary}>
                <span className={styles.id}>ID: {product.id}</span>
                <strong className={styles.name}>{product.name}</strong>
                <span className={styles.price}>
                    {formatRupiah(product.price)}
                </span>
            </div>
            <div className={styles.actions}>
                <Button
                    variant="secondary"
                    className={styles.action}
                    onClick={onCancel}
                >
                    Batal
                </Button>
                <Button
                    variant="danger"
                    className={styles.action}
                    onClick={onConfirm}
                >
                    Hapus Produk
                </Button>
            </div>
        </div>
    )
}

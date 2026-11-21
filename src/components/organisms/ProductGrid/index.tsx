import type { Product } from "../../../types/product"
import type { ViewMode } from "../../../types/view-mode"
import ProductCard from "../../molecules/ProductCard"
import styles from "./styles.module.css"

type Props = {
    products: Product[]
    viewMode: ViewMode
    onEdit: (product: Product) => void
    onDelete: (product: Product) => void
}

export default function ProductGrid({
    products,
    viewMode,
    onEdit,
    onDelete,
}: Props) {
    if (products.length === 0) {
        return (
            <p className={styles.empty}>
                Tidak ada produk yang cocok. Coba kata kunci lain.
            </p>
        )
    }

    return (
        <div
            className={viewMode === "grid" ? styles.grid : styles.list}
            data-view={viewMode}
        >
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

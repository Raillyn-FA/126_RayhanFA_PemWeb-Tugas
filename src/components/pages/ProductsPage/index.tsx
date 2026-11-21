import { useState } from "react"
import type { Product, ProductValues } from "../../../types/product"
import type { ViewMode } from "../../../types/view-mode"
import Button from "../../atoms/Button"
import DeleteConfirm from "../../molecules/DeleteConfirm"
import Modal from "../../molecules/Modal"
import SearchBar from "../../molecules/SearchBar"
import ProductForm from "../../organisms/ProductForm"
import ProductGrid from "../../organisms/ProductGrid"
import styles from "./styles.module.css"

type Props = {
    products: Product[]
    viewMode: ViewMode
    onAdd: (values: ProductValues) => void
    onEdit: (id: number, values: ProductValues) => void
    onDelete: (id: number) => void
}

type ModalState =
    | { type: "add" }
    | { type: "edit"; product: Product }
    | { type: "delete"; product: Product }
    | null

export default function ProductsPage({
    products,
    viewMode,
    onAdd,
    onEdit,
    onDelete,
}: Props) {
    const [search, setSearch] = useState("")
    const [modal, setModal] = useState<ModalState>(null)

    const keyword = search.trim().toLowerCase()
    const visibleProducts = products.filter((product) =>
        product.name.toLowerCase().includes(keyword),
    )

    const closeModal = () => setModal(null)

    return (
        <>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Manajemen Produk</h1>
                    <p className={styles.description}>
                        Kelola daftar produk dan harga dalam satu tempat.
                    </p>
                </div>
                <Button onClick={() => setModal({ type: "add" })}>
                    + Tambah Produk
                </Button>
            </header>

            <SearchBar
                value={search}
                onChange={setSearch}
                total={products.length}
            />

            <section aria-label="Daftar produk">
                <ProductGrid
                    products={visibleProducts}
                    viewMode={viewMode}
                    onEdit={(product) => setModal({ type: "edit", product })}
                    onDelete={(product) =>
                        setModal({ type: "delete", product })
                    }
                />
            </section>

            <p role="status" className={styles.notice}>
                Menampilkan {visibleProducts.length} dari {products.length}{" "}
                produk
            </p>

            {modal?.type === "add" && (
                <Modal
                    title="Tambah Produk"
                    description="Masukkan informasi produk baru."
                    onClose={closeModal}
                >
                    <ProductForm
                        product={null}
                        onSubmit={(values) => {
                            onAdd(values)
                            closeModal()
                        }}
                        onCancel={closeModal}
                    />
                </Modal>
            )}

            {modal?.type === "edit" && (
                <Modal
                    title="Edit Produk"
                    description="Perbarui informasi produk yang dipilih."
                    onClose={closeModal}
                >
                    <ProductForm
                        product={modal.product}
                        onSubmit={(values) => {
                            onEdit(modal.product.id, values)
                            closeModal()
                        }}
                        onCancel={closeModal}
                    />
                </Modal>
            )}

            {modal?.type === "delete" && (
                <Modal
                    title="Hapus Produk?"
                    description="Produk yang dihapus tidak dapat dikembalikan."
                    onClose={closeModal}
                >
                    <DeleteConfirm
                        product={modal.product}
                        onConfirm={() => {
                            onDelete(modal.product.id)
                            closeModal()
                        }}
                        onCancel={closeModal}
                    />
                </Modal>
            )}
        </>
    )
}

import { useState, type FormEvent } from "react"
import type { Product, ProductValues } from "../../../types/product"
import Button from "../../atoms/Button"
import FormField from "../../molecules/FormField"
import styles from "./styles.module.css"

type Props = {
    // null = mode tambah, berisi produk = mode edit
    product: Product | null
    onSubmit: (values: ProductValues) => void
    onCancel: () => void
}

export default function ProductForm({ product, onSubmit, onCancel }: Props) {
    const isEdit = product !== null
    const [name, setName] = useState(product?.name ?? "")
    const [price, setPrice] = useState(product ? String(product.price) : "")
    const [error, setError] = useState("")

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const priceNumber = Number(price)

        if (!name.trim()) {
            setError("Nama produk tidak boleh kosong.")
            return
        }
        if (
            price.trim() === "" ||
            !Number.isInteger(priceNumber) ||
            priceNumber <= 0
        ) {
            setError("Masukkan harga berupa bilangan bulat lebih dari 0.")
            return
        }
        onSubmit({ name: name.trim(), price: priceNumber })
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            {isEdit && <p className={styles.id}>ID: {product.id}</p>}
            <FormField
                id="product-name"
                label="Nama Produk"
                placeholder="Contoh: Pulpen"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <FormField
                id="product-price"
                label="Harga (Rp)"
                type="number"
                placeholder="Contoh: 5000"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <p className={styles.hint}>Harga harus lebih dari 0.</p>
            {error && (
                <p role="alert" className={styles.error}>
                    {error}
                </p>
            )}
            <div className={styles.actions}>
                <Button
                    variant="secondary"
                    className={styles.action}
                    onClick={onCancel}
                >
                    Batal
                </Button>
                <Button type="submit" className={styles.action}>
                    {isEdit ? "Simpan Perubahan" : "Simpan Produk"}
                </Button>
            </div>
        </form>
    )
}

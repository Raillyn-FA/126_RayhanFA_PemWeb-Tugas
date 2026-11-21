import Input from "../../atoms/Input"
import styles from "./styles.module.css"

type Props = {
    value: string
    onChange: (value: string) => void
    total: number
}

export default function SearchBar({ value, onChange, total }: Props) {
    return (
        <div className={styles.bar}>
            <Input
                type="search"
                aria-label="Pencarian Produk"
                placeholder="Cari nama produk..."
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className={styles.input}
            />
            <span className={styles.count}>{total} produk</span>
        </div>
    )
}

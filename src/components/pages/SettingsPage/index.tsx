import type { ViewMode } from "../../../types/view-mode"
import styles from "./styles.module.css"

type Props = {
    viewMode: ViewMode
    onChange: (viewMode: ViewMode) => void
}

const options: { value: ViewMode; label: string; description: string }[] = [
    {
        value: "grid",
        label: "Grid",
        description: "Kartu tersusun dalam beberapa kolom.",
    },
    { value: "list", label: "List", description: "Satu produk per baris." },
]

export default function SettingsPage({ viewMode, onChange }: Props) {
    return (
        <section>
            <h1 className={styles.title}>Settings</h1>
            <p className={styles.description}>
                Atur tampilan daftar produk di halaman Produk.
            </p>
            <fieldset className={styles.group}>
                <legend className={styles.legend}>Tampilan produk</legend>
                {options.map((option) => (
                    <label
                        key={option.value}
                        className={
                            viewMode === option.value
                                ? styles.optionActive
                                : styles.option
                        }
                    >
                        <input
                            type="radio"
                            name="viewMode"
                            value={option.value}
                            checked={viewMode === option.value}
                            onChange={() => onChange(option.value)}
                            className={styles.radio}
                        />
                        <span>
                            <span className={styles.label}>{option.label}</span>
                            <span className={styles.hint}>
                                {option.description}
                            </span>
                        </span>
                    </label>
                ))}
            </fieldset>
        </section>
    )
}

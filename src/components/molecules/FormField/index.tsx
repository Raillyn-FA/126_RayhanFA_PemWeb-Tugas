import type { InputHTMLAttributes } from "react"
import Input from "../../atoms/Input"
import styles from "./styles.module.css"

type Props = InputHTMLAttributes<HTMLInputElement> & {
    id: string
    label: string
}

export default function FormField({ id, label, ...inputProps }: Props) {
    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <Input id={id} {...inputProps} />
        </div>
    )
}

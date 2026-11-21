import type { InputHTMLAttributes } from "react"
import styles from "./styles.module.css"

export default function Input({
    className = "",
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return <input className={`${styles.input} ${className}`} {...props} />
}

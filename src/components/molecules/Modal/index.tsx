import { useEffect, useId, type ReactNode } from "react"
import { TbX } from "react-icons/tb"
import styles from "./styles.module.css"

type Props = {
    title: string
    description?: string
    onClose: () => void
    children: ReactNode
}

export default function Modal({ title, description, onClose, children }: Props) {
    const titleId = useId()

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [onClose])

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className={styles.dialog}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    aria-label="Tutup"
                    className={styles.close}
                    onClick={onClose}
                >
                    <TbX aria-hidden="true" />
                </button>
                <h2 id={titleId} className={styles.title}>
                    {title}
                </h2>
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
                {children}
            </div>
        </div>
    )
}

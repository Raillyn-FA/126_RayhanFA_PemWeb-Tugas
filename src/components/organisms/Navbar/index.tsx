import { NavLink } from "react-router"
import styles from "./styles.module.css"

const links = [
    { to: "/products", label: "Produk" },
    { to: "/settings", label: "Settings" },
]

export default function Navbar() {
    return (
        <header className={styles.header}>
            <nav aria-label="Menu utama" className={styles.nav}>
                <span className={styles.brand}>Manajemen Produk</span>
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.link
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

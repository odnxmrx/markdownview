import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.myHeader}>
            <h1>Markdown formatter</h1>
            <p>Realtime markdown previewer editor.</p>
        </div>
    )
}
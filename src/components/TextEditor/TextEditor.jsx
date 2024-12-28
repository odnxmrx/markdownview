import styles from "./TextEditor.module.css"

// eslint-disable-next-line react/prop-types
export const TextEditor = ({ currentInput, handleChange }) => {


    const handleCopyText = () => {
        navigator.clipboard.writeText(currentInput);
    }

    return (
        <div className={styles.containerBox}>
            <textarea
                name="editor"
                id="editor"
                cols={30}
                rows={20}
                value={currentInput}
                onChange={handleChange}
            ></textarea>
            <button type="button" className={styles.copyButton} onClick={handleCopyText}>Copy</button>
        </div >
    )
}
import styles from "./TextEditor.module.css"

// eslint-disable-next-line react/prop-types
export const TextEditor = ({ currentInput, handleChange }) => {

    return (
        <div className={styles.containerBox}>
            <textarea
                name="editor"
                id="editor"
                cols={30}
                rows={10}
                value={currentInput}
                onChange={handleChange}
            ></textarea>
        </div >
    )
}
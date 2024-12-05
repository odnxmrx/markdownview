// import { useState } from "react"
import styles from "./TextEditor.module.css"

export const TextEditor = ({ currentInput, handleChange }) => {

    // const [currentInput, setCurrentInput] = useState("");

    // const handleChange = (event) => {
    //     setCurrentInput(event.target.value);
    // }
    // console.log('currentInput esssss: ', currentInput);


    // const placeholderText = `# Hola
    //     ## This is?
    //     `

    return (
        <div className={styles.container}>
            {/* <p>Hola</p> */}
            {/* <label htmlFor="editor">Edit your text here</label> */}
            <textarea
                name="editor"
                id="editor"
                // cols={30}
                // rows={5}
                value={currentInput}
                onChange={handleChange}
            // placeholder="# hello"
            ></textarea>
        </div >
    )
}
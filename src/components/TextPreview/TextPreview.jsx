import { useEffect } from "react";
import { marked } from "marked";
import styles from "./TextPreview.module.css"

// eslint-disable-next-line react/prop-types
export const TextPreview = ({ currentInput }) => {

    marked.use({
        breaks: true,
    })

    useEffect(() => {
        const wrapper = document.getElementById("preview"); // Access DOM after rendering
        if (wrapper) {
            const htmlVal = marked.parse(currentInput);
            wrapper.innerHTML = htmlVal;
        }
    }, [currentInput]); // On currentInput change

    return (
        <div id="preview" className={styles.containerBox}></div>
    );
};

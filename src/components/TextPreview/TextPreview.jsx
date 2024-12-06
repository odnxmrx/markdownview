import { useEffect } from "react";
import { marked } from "marked";

// eslint-disable-next-line react/prop-types
export const TextPreview = ({ currentInput }) => {
    useEffect(() => {
        const wrapper = document.getElementById("preview"); // Access DOM after rendering
        if (wrapper) {
            const htmlVal = marked.parse(currentInput);
            wrapper.innerHTML = htmlVal;
        }
    }, [currentInput]); // On currentInput change

    return (
        <div id="preview"></div>
    );
};

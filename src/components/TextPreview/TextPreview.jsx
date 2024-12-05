import { useEffect } from "react";
import { marked } from "marked";

// eslint-disable-next-line react/prop-types
export const TextPreview = ({ currentInput }) => {
    useEffect(() => {
        // Access the DOM after rendering
        const wrapper = document.getElementById("preview");
        if (wrapper) {
            const htmlVal = marked.parse(currentInput);
            wrapper.innerHTML = htmlVal;
        }
    }, [currentInput]); // Runs every time currentInput changes

    return (
        <div id="preview"></div>
    );
};

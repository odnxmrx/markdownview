import { marked } from "marked"

export const TextPreview = ({ currentInput }) => {

    const htmlVal = marked.parse(currentInput);

    return (
        <>
            <label htmlFor="preview">Previewer</label>
            <textarea
                name="preview"
                id="preview"
                cols="30"
                rows="10"
                value={htmlVal}
                readOnly></textarea>
        </>
    )
}
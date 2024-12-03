// import { useState } from "react"

export const TextEditor = ({ currentInput, handleChange }) => {

    // const [currentInput, setCurrentInput] = useState("");

    // const handleChange = (event) => {
    //     setCurrentInput(event.target.value);
    // }
    console.log('currentInput esssss: ', currentInput);


    return (
        <div>
            {/* <p>Hola</p> */}
            <label htmlFor="editor">Edit</label>
            <textarea
                name="editor"
                id="editor"
                cols={30}
                rows={5}
                value={currentInput}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}
import { marked } from "marked"

export const TextPreview = ({ currentInput = "n" }) => {

    //use parser
    let htmlVal = `${marked.parse(currentInput)}`;

    var wrapper = document.getElementById('preview');

    console.log('ques wrapper??', wrapper);
    wrapper.innerHTML = htmlVal;

    // console.log('que es htmlVal? ', typeof htmlVal);

    return (
        <div id="preview">
            {/*             
            <label htmlFor="preview">Previewer</label>
            <textarea
                name="preview"
                id="preview"
                cols="30"
                rows="10"
                value={htmlVal}
                readOnly></textarea>


            <blockquote>
            </blockquote> */}
        </div>
    )
}
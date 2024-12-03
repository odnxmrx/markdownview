// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { TextEditor } from './components/TextEditor/TextEditor'
import { TextPreview } from './components/TextPreview/TextPreview'

function App() {
  // const [count, setCount] = useState(0)

  const [currentInput, setCurrentInput] = useState("");

  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  }

  return (
    <>
      {/* <h1>Hello world!</h1> */}
      <p>I'm an app. Markdown Previewer</p>
      <TextEditor currentInput={currentInput} handleChange={handleChange}></TextEditor>
      <TextPreview currentInput={currentInput}></TextPreview>
    </>
  )
}

export default App

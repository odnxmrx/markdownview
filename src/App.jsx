// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TextEditor } from './components/TextEditor/TextEditor'
import { TextPreview } from './components/TextPreview/TextPreview'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world!</h1>
      <p>I'm an app. Markdown Previewer</p>
      <TextEditor></TextEditor>
      <TextPreview></TextPreview>
    </>
  )
}

export default App

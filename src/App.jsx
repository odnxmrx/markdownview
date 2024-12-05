// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { TextEditor } from './components/TextEditor/TextEditor'
import { TextPreview } from './components/TextPreview/TextPreview'

function App() {

  const preWrittenEditText = `# Hellooooow

## This is a sub header

[Google](google.com)

\`this is inline code\`

\`\`\`
  This is a code block

\`\`\`

You can add your list
- Item 1
- Item 2

### Blockoues

> This is a blockquote

Also an image:

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Square_200x200.svg/480px-Square_200x200.svg.png)


**This is a bolded text** 

`
  const [currentInput, setCurrentInput] = useState(preWrittenEditText);


  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  }

  return (
    <main>
      {/* <h1>Hello world!</h1> */}
      {/* <p>I'm an app. Markdown Previewer</p> */}
      <TextEditor currentInput={currentInput} handleChange={handleChange}></TextEditor>
      <TextPreview currentInput={currentInput}></TextPreview>
    </main>
  )
}

export default App

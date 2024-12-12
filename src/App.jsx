import { useState } from 'react';
import './App.css'
import { TextEditor } from './components/TextEditor/TextEditor'
import { TextPreview } from './components/TextPreview/TextPreview'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

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

![alt text](https://cdn-icons-png.flaticon.com/256/10910/10910575.png)


**This is a bolded text** 

`
  const [currentInput, setCurrentInput] = useState(preWrittenEditText);


  const handleChange = (event) => {
    setCurrentInput(event.target.value);
  }

  return (
    <main>
      <Header />
      <TextEditor currentInput={currentInput} handleChange={handleChange} />
      <TextPreview currentInput={currentInput} />
      <Footer />
    </main>
  )
}

export default App

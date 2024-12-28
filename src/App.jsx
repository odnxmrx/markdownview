import { useState } from 'react';
import './App.css'
import { TextEditor } from './components/TextEditor/TextEditor'
import { TextPreview } from './components/TextPreview/TextPreview'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {

  const preWrittenEditText = `# Title goes here

Welcome to this **markdown realtime previewer**. Start typing rigth here.

## Features

[Google link](google.com)


- **Feature 1**: short description goes here.
- **Feature 2**: short description goes here.
- **Feature 3**: short description goes here.

---

## **Technologies Used**

### **Frontend**

- **React + Vite**
- **CSS Modules**

### **Backend**

- **Node.js**
- **Database**

---


## Setup and Installation

1. On root directory, run the following command in the console:


\`\`\`bash
  npm install

\`\`\`

## Running App

Add images of your app here.

Also an image:

![alt text](https://cdn-icons-png.flaticon.com/256/10910/10910575.png)


**This is a bolded text** 

You can add your list
- Item 1
- Item 2


\`\`\`bash
      ________________________
      I'm an expert in my field.
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\\
                  ||----w |
                  ||     ||

\`\`\`


### Blockoues

> This is a blockquote

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

import { useState, useEffect } from "react";
import "./App.css";
import { Marked } from "marked";

function App() {
  const loadingDefault = `# Welcome to Markdown Previewer!
  ## This is a sub-heading demonstrating H2 size.
  Check out the [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) to learn more.  
  You can use \`inline code\` like this within your text.
  
  Here's an example of a code block:  

  \`\`\`javascript
  function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  \`\`\`
  * This is a list item.
  * Another list item for demonstration.
  > Blockquotes are used to highlight quoted text.

  ![React logo](/assets/react.svg)

  **This text is bolded.**
  `;
  const [code, setCode] = useState(loadingDefault);
  const marked = new Marked();
  const changeContent = (data) => {
    const markedData = marked.parse(data);
    setCode(markedData);
  };

  useEffect(() => changeContent(loadingDefault), []);

  return (
    <div className="mainDiv">
      <textarea
        className="input"
        name="editor"
        id="editor"
        cols="30"
        rows="10"
        onChange={() => changeContent(event.target.value)}
        defaultValue={loadingDefault}
      ></textarea>
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: code }}
      ></div>
    </div>
  );
}

export default App;

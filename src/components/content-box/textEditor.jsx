import React from "react";

const TextEditor = ({ content, setContent }) => {
  const handleChange = (e) => {
    setContent(e.target.value); // Обновляем состояние в родительском компоненте
  };

  return (
    <>
      <div className="toolbar">
        <p>Title placeholder</p>
      </div>
      <textarea
      id="editor"
      type="text"
      value={content} 
      onChange={handleChange}>
      </textarea>
    </>
  )
}
export default TextEditor
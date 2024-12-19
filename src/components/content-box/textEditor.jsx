import React from "react";

const TextEditor = ({ title, content, onChange }) => {

  return (
    <>
      <div className="toolbar">
        <p>{title}</p>
      </div>
      <textarea
        id="editor"
        type="text"
        value={content}
        onChange={onChange}
      >
      </textarea>
    </>
  )
}
export default TextEditor
import React from "react";

const Previewer = ({ content }) => {
  return (
    <>
      <div className="toolbar">
        <p>Markdown Preview</p>
      </div>
      <div id="preview">
        {content}
      </div>
    </>
  );
};

export default Previewer;

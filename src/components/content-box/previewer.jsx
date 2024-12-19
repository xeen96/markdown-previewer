import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const Previewer = ({ content }) => {
  return (
    <>
      <div className="toolbar">
        <p>Markdown Preview</p>
      </div>
      <div id="preview">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Previewer
import React, { useContext } from "react";
import "./contentBox.css";
import TextEditor from "./textEditor";
import Previwer from "./previewer";
import { documentContext } from "../../context/documentContext";

const ContentBox = () => {
  const { currentDocument, updateCurrentDocument } = useContext(documentContext);
  const { content, title } = currentDocument;

  const handleChangeContent = (e) => {
    updateCurrentDocument(e.target.value);
  };

  return (
    <div className="col-10">
      {currentDocument ? (
        <>
          <div className="editorWrap">
            <TextEditor
              content={content}
              title={title}
              onChange={handleChangeContent}
            />
          </div>
          <div className="previewWrap">
            <Previwer content={content} />
          </div>
        </>
      ) : (
        <p>No document selected</p>
      )}
    </div>
  );
};

export default ContentBox;

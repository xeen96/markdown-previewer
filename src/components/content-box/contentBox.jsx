import React, {useState}  from "react";
import './contentBox.css'
import TextEditor from "./textEditor";
import Previwer from './previewer'

const ContentBox = () => {
  const [content, setContent] = useState(`Default Text`)
  return (
    <div className="col-11">
      <div className="editorWrap">
        <TextEditor content={content} setContent={setContent} />
      </div>
      <div className="previewWrap">
        <Previwer content={content}/>
      </div>
    </div>
  );
};

export default ContentBox;
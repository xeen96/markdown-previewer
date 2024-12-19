import React, { useContext } from "react";
import "./navbar.css";
import { documentContext } from "../../context/documentContext";

export const NavBar = () => {
  const { documents, createNewDocument, selectDocument } = useContext(documentContext);

  return (
    <div className="col-2 p-0">
      <div className="d-flex flex-column align-items-start h-100">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="document"
              onClick={() => selectDocument(doc.id)}
            >
              <p>{doc.id}</p>
            </div>
          ))}
        <button onClick={createNewDocument} className="btn">
          Create new...
        </button>
      </div>
    </div>
  );
};

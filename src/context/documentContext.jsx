import React, { createContext, useState } from "react";
import TitleModal from "../components/modal/titleModal"
import { defaultMarkdown } from './defaultText';

const documentContext = createContext();

function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([
    { id: 1, title: "Default Document", content: defaultMarkdown },
  ]);
  const [currentDocumentId, setCurrentDocumentId] = useState(documents[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const createNewDocument = (title) => {
    const newDocument = {
      id: Date.now(),
      title: title || "Untitled Document",
      content: "",
    };
    setDocuments((prevDocs) => [...prevDocs, newDocument]);
    setCurrentDocumentId(newDocument.id);
  };

  const selectDocument = (id) => {
    setCurrentDocumentId(id);
  };

  const updateCurrentDocument = (updatedContent) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === currentDocumentId ? { ...doc, content: updatedContent } : doc
      )
    );
  };

  const currentDocument = documents.find((doc) => doc.id === currentDocumentId);

  return (
    <documentContext.Provider
      value={{
        documents,
        currentDocument,
        createNewDocument: openModal, 
        selectDocument,
        updateCurrentDocument,
      }}
    >
      {children}
      <TitleModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={createNewDocument}
      />
    </documentContext.Provider>
  );
}

export { documentContext, DocumentProvider };

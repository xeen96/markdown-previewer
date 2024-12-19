import React, { createContext, useState } from "react";
import {defaultMarkdown} from './defaultText'

const documentContext = createContext();

function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([
    { id: 1, title: "Default Document", content: defaultMarkdown },
  ]);
  const [currentDocumentId, setCurrentDocumentId] = useState(documents[0].id);

  // Функция для создания нового документа
  const createNewDocument = () => {
    const newDocument = {
      id: Date.now(),
      title: "New Document",
      content: "",
    };
    setDocuments((prevDocs) => [...prevDocs, newDocument]);
    setCurrentDocumentId(newDocument.id); // Установить новый документ активным
  };

  // Функция для выбора документа
  const selectDocument = (id) => {
    setCurrentDocumentId(id);
  };

  // Функция для обновления содержимого текущего документа
  const updateCurrentDocument = (updatedContent) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === currentDocumentId ? { ...doc, content: updatedContent } : doc
      )
    );
  };

  // Получить текущий документ
  const currentDocument = documents.find((doc) => doc.id === currentDocumentId);

  return (
    <documentContext.Provider
      value={{
        documents,
        currentDocument,
        createNewDocument,
        selectDocument,
        updateCurrentDocument,
      }}
    >
      {children}
    </documentContext.Provider>
  );
}

export { documentContext, DocumentProvider };

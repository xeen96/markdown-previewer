import { useState } from "react";

const useDocument = (initialDocument) => {
  const [document, setDocument] = useState(initialDocument);

  const updateTitle = (newTitle) => {
    setDocument((prev) => ({ ...prev, title: newTitle }));
  };

  const updateContent = (newContent) => {
    setDocument((prev) => ({ ...prev, content: newContent }));
  };

  return {
    document,
    updateTitle,
    updateContent,
  };
};

export default useDocument;

import React, { createContext, useState } from "react";

const documentContext = createContext();

function DocumentProvider({ children }) {
  const [document, setDocument] = useState({
    id: Date.now(),
    title: "Default Title",
    content: "Default Text",
  });

  return (
    <documentContext.Provider value={{ document, setDocument }}>
      {children}
    </documentContext.Provider>
  );
}

export { documentContext, DocumentProvider };

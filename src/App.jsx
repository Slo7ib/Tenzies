import React from "react";
import Main from "./components/Main";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
}

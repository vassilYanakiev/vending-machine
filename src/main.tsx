import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorBoundary from "./ErrorBoundary.jsx";
import VendingMachine from "./VendingMachine.tsx";
import Header from "./components/Header.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <ErrorBoundary>
      <VendingMachine />
    </ErrorBoundary>
  </React.StrictMode>
);

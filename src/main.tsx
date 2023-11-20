import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorBoundary from "./ErrorBoundary.jsx";
import VendingMachine from "./VendingMachine.tsx";
import Header from "./components/Header.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <ErrorBoundary
      fallback={
        <div style={{ fontSize: "32px" }}>
          This vending machine is out of order!
        </div>
      }
    >
      <VendingMachine />
    </ErrorBoundary>
  </React.StrictMode>
);

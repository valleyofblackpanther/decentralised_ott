// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import App from './App'
// import './index.css'
// import { TransactionProvider } from './context/TransactionContext';

// ReactDOM.createRoot(
//   <TransactionProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   </TransactionProvider>,
//   document.getElementById('root')  

// )
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
  document.getElementById("root"),
);
import React from "react";
import ReactDOM from 'react-dom';
import "./main.css";

import App from "./App";

import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,

  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

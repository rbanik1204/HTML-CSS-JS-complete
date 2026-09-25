import { StrictMode } from 'react';
import { ReactDOM } from 'react-dom/client';
import App from './App.jsx';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const container = document.getElementById("id");
//Initialize react's concurrent rendering engine on that root node
const root = ReactDOM.createRoot(container);
root.render(/*#__PURE__*/_jsxDEV(StrictMode, {
  children: /*#__PURE__*/_jsxDEV(App, {}, void 0, false)
}, void 0, false));
import * as React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./css/style.css";

const root: HTMLElement | null = document.getElementById("root");
if (root) {
    createRoot(root).render(<App />);
}else{
    console.error("Could not find root element");
}
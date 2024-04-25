import { useState } from "react";

const themes = {
  default: {
    primary: "#3498db",
    secondary: "#2ecc71",
    accent: "#e74c3c",
    text: "#333",
    background: "#ecf0f1",
  },
  dark: {
    primary: "#9b59b6",
    secondary: "#34495e",
    accent: "#e67e22",
    text: "#ecf0f1",
    background: "#2c3e50",
  },
  green: {
    primary: "#27ae60",
    secondary: "#16a085",
    accent: "#f39c12",
    text: "#2c3e50",
    background: "#ecf0f1",
  },
};

const [theme, setTheme] = useState("default");

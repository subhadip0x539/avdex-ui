import { createRoot } from "react-dom/client";
import "./index.css";
import "./global.css";
import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(<App />);

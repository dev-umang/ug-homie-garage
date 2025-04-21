import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import AppModule from "@modules/app.module";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppModule />
  </StrictMode>,
);

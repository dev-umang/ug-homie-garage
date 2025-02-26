import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { env } from "@common/utils";
import AppModule from "@modules/app.module";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  env.dev ? (
    <AppModule />
  ) : (
    <StrictMode>
      <AppModule />
    </StrictMode>
  ),
);

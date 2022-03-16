import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./Ex1";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="App">
      <App />
    </div>
  </StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

NProgress.configure({ showSpinner: false });
toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

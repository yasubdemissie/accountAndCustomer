import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Store";
import { deposit } from "./features/accounts/accountSlice";
import { createAccount, updateName } from "./features/customers/customerSlice";

store.dispatch(deposit(500));
store.dispatch(createAccount("Ysun diek", 40270174));
store.dispatch(updateName("Yasub Demissie"));

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

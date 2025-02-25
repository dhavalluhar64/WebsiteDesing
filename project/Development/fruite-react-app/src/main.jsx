// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartDataContext from "./Website/Layout/Store/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <CartDataContext>
      <App />
    </CartDataContext>
  // </StrictMode>
);

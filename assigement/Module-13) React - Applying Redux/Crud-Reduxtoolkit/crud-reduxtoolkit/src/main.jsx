import { StrictMode, version } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";

// MDB React Boostrap link

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Store from "./Webpage/Store/mainstore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      {document.addEventListener("copy", function (event) {
        event.clipboardData.setData(
          "text/plain",
          "Nikal Yahase Text Copy karne Aya hai"
        );

        event.preventDefault();
      })}
      <App />
    </Provider>
  </StrictMode>
);

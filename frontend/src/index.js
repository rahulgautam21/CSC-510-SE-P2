import React from "react";
import Routes from "./Routes";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = createRoot(document.getElementById("root"));

// ReactDOM.render(<React.StrictMode>
//     <GoogleOAuthProvider clientId="587944242094-ik1d9hkchqmh6t1of8ff0u9bf4oesa2q.apps.googleusercontent.com">
//         <Routes />, document.getElementById('root') </GoogleOAuthProvider>;
// </React.StrictMode>);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="587944242094-ik1d9hkchqmh6t1of8ff0u9bf4oesa2q.apps.googleusercontent.com">
      <Routes />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);

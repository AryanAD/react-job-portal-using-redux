import { HashRouter } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Router } from "./router/Route";

const RouteManager = () => {
  return (
    <HashRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router />
    </HashRouter>
  );
};

const App = () => {
  return RouteManager();
};

export default App;

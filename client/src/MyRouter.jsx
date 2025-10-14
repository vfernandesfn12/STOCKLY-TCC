import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Login from "./pages/Login.jsx"
import RotasProtegidas from "././pages/RotasProtegidas.jsx"
import Home from "./pages/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
        {
            index: true,
            element: <Login />
        },
        {
            path: "login",
            element: < Login/>

        }
    ]
  },
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
        {
            path: "home",
            element: <Home />
        }
    ]
  }
]);

export default router

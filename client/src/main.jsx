import './index.css'
import {createRoot} from "react-dom/client"
import {StrictMode} from "react"


//Provedor de rotas do react router
import { RouterProvider } from 'react-router-dom'
//Meu gerenciador de rotas
import MyRouter from "./MyRouter"

import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Faz o provedor utilizar as rotas que voce
    definiu no MyRouter */}
    <RouterProvider router={MyRouter}/>
  </StrictMode>,
)

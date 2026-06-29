import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "sweetalert2/dist/sweetalert2.min.css";
import './index.css'
import Routing from './routing';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/idp/v1'>
      <Routing />
    </BrowserRouter>
  </StrictMode>,
)

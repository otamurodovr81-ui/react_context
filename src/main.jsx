import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cantext from './cantext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cantext>
     <App/>  
   </Cantext>
  </StrictMode>,
)

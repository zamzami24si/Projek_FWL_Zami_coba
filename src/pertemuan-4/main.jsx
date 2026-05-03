import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import ServiceList from './ServiceList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ServiceList/>
  </StrictMode>,
)
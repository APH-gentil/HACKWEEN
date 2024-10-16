import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Containers/Home'
import { myGlobalStyles as MyGlobalStyles } from './Styles/global';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <MyGlobalStyles />
   <Home /> 
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { WindowProvider } from './contexts/WindowContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <HashRouter>
      <WindowProvider>
        <App />
      </WindowProvider>
     </HashRouter>
  </StrictMode>,
)

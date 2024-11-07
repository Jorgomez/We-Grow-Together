import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { AuthProvider } from './Contexts/AuthContext'
import { FavProvider } from './Contexts/FavContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <FavProvider>
        <App />
      </FavProvider>
    </AuthProvider>
  </BrowserRouter>
)

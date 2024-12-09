import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { AuthProvider } from './Contexts/AuthContext'
import { FavProvider } from './Contexts/FavContext'
import { SearchProvider } from './Contexts/SearchContext'
import { ActiveComponentProvider } from './Contexts/ProfileContext'
import { NotificationProvider } from './Contexts/NotificationContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ActiveComponentProvider>
        <NotificationProvider>
          <SearchProvider>
            <FavProvider>
              <App />
            </FavProvider>
          </SearchProvider>
        </NotificationProvider>
      </ActiveComponentProvider>
    </AuthProvider>
  </BrowserRouter>
)

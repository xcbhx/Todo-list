import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1️⃣ Import Provider and store
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2️⃣ Wrap App with Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/Pages/App/App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.css'
import { GlobalProvider } from './context/global/GlobalState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Provider>
    
  </React.StrictMode>,
)

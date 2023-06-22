import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import {PostsContextProvider} from './context/PostsContecxt'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
     <PostsContextProvider>
          <App />
      </PostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BlankPage from './BlankPage.jsx'
import './index.css'

const searchParams = new URLSearchParams(window.location.search);
const showBlankPage = searchParams.get('page') === 'blank';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {showBlankPage ? <BlankPage /> : <App />}
  </React.StrictMode>,
)

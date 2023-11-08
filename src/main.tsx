import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Stopwatch from './components/Stopwatch/Stopwatch.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Stopwatch />
  </React.StrictMode>,
)

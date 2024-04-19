import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Main from './Components/MainCompo/Main'
import { DataProvider } from './Components/DataContext/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider> 
<Main></Main>
    </DataProvider>
  </React.StrictMode>,
)

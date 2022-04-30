import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from '@/systems/core'
import '@/styles/app.scss'

const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(<App />)

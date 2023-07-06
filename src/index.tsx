import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/assets/style/style.less'

const root = document.getElementById('root')

if (root) {
    createRoot(root).render(<App />)
}

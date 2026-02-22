import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './todo-list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// window.addEventListener('keyup', e => {
//   if (e.key === 'Enter') {
//     if (document.getElementById('addInput').value.trim() === '') {
//       return document.getElementById('addInput').focus()
//     }

//     document.getElementById('addBtn').click()
//   }
// })

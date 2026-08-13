import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'
import Bio from './Bio.jsx'
import Contact from './Contact.jsx'
import Skills from './Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this App/Test is a component */}
    <Test/>
    <App/>
    <Bio/>
    <Contact/>
    <Skills/>

  </StrictMode>,
)

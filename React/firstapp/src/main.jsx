
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Hero.jsx'
import Irise from './Irise.jsx'

createRoot(document.getElementById('virat')).render(
  <>
    <App />
    <Hero></Hero>
    <Irise></Irise>
  </>
)

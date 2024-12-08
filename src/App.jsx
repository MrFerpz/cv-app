import { useState } from 'react'
import './App.css'
import BasicInfo from './BasicInfo.jsx'
import Education from './Education.jsx'
import Experience from'./Experience.jsx'
import CVApp from './CVApp.jsx'

function App() {

  return (
    <div className="grid-container">
    <BasicInfo/>
    <Education/>
    <Experience/>
    <CVApp/>
    </div>
  )
}

export default App

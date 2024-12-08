import { useState } from 'react'
import './App.css'
import './BasicInfo.jsx'
import './Education.jsx'
import './Experience.jsx'
import './CVApp.jsx'

function App() {

  return (
    <div>
    <BasicInfo/>
    <Education/>
    <Experience/>
    <CVApp/>
    </div>
  )
}

export default App

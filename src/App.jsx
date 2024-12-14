import { useState } from 'react'
import './App.css'
import BasicInfo from './components/sections/BasicInfo.jsx'
import Education from './components/sections/Education.jsx'
import Experience from'./components/sections/Experience.jsx'
import CVApp from './components/sections/CVApp.jsx'

function App() {
  const [person, setPerson] = useState(
    {name: "", email: "", number: "", address: "", degree: "",
     university: "", uniStartDate: "", uniEndDate: "", role: "", 
     company: "", roleStartDate: "", roleEndDate: "", roleDescription: ""});

    function onNameChange(e) {
      console.log(e.target.value);
      setPerson({...person, name: e.target.value})
    }

  return (
    <div className="grid-container">
    <BasicInfo
      onChange={onNameChange}
      value={person.name}
      label="Name"
    />
    <Education/>
    <Experience/>
    <CVApp
      name={person.name}
      />
    </div>
  )
}

export default App

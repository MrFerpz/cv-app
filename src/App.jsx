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
      setPerson({...person, name: e.target.value})
    }

    function onEmailChange(e) {
      setPerson({...person, email: e.target.value})
    }

    function onNumberChange(e) {
      setPerson({...person, number: e.target.value})
    }

    function onAddressChange(e) {
      setPerson({...person, address: e.target.value})
    }

    function onDegreeChange(e) {
      setPerson({...person, degree: e.target.value})
    }

    function onUniChange(e) {
      setPerson({...person, university: e.target.value})
    }

    function onUniStartDateChange(e) {
      setPerson({...person, uniStartDate: e.target.value})
    }

    function onUniEndDateChange(e) {
      setPerson({...person, uniEndDate: e.target.value})
    }

    function onRoleChange(e) {
      setPerson({...person, role: e.target.value})
    }

    function onCompanyChange(e) {
      setPerson({...person, company: e.target.value})
    }

    function onRoleStartDateChange(e) {
      setPerson({...person, roleStartDate: e.target.value})
    }

    function onRoleEndDateChange(e) {
      setPerson({...person, roleEndDate: e.target.value})
    }

    function onRoleDescriptionChange(e) {
      setPerson({...person, roleDescription: e.target.value})
    }

  return (
    <div className="grid-container">
    <BasicInfo
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onNumberChange={onNumberChange}
      onAddressChange={onAddressChange}
    />
    <Education
      onDegreeChange={onDegreeChange}
      onUniChange={onUniChange}
      onStartDateChange={onUniStartDateChange}
      onEndDateChange={onUniEndDateChange}
    />
    <Experience
      onRoleChange={onRoleChange}
      onCompanyChange={onCompanyChange}
      onRoleStartDateChange={onRoleStartDateChange}
      onRoleEndDateChange={onRoleEndDateChange}
      onRoleDescriptionChange={onRoleDescriptionChange}
    />
    <CVApp
      person={person}
      />
    </div>
  )
}

export default App

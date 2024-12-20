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

    function onEducationSubmit() {
      // access the relevant components on the CV
      let degreeDiv = document.querySelector(".cv-degree");
      let universityDiv = document.querySelector(".cv-university");
      let uniDatesDiv = document.querySelector(".cv-uni-dates");

      // assign the details
      degreeDiv.innerHTML= person.degree;
      universityDiv.innerHTML= person.university;

      if ((person.uniStartDate !== "") && (person.uniEndDate !== "")) {
        uniDatesDiv.innerHTML = `${person.uniStartDate} - ${person.uniEndDate}`
        } else {
          uniDatesDiv.innerHTML = ""
        };
    }

    function onBasicInfoSubmit() {
      const emailIconHTML = '<span className="icon"><svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="#ffffff" strokeWidth="1.5"><path xmlns="http://www.w3.org/2000/svg" d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
      const phoneIconHTML = '<span className="icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/></svg></span>'
      const addressIconHTML = '<span className="icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clipRule="evenodd"/></svg></span>'

      let nameDiv = document.querySelector(".cv-name-output");
      let emailDiv = document.querySelector(".cv-email-output");
      let numberDiv = document.querySelector(".cv-number-output");
      let hometownDiv = document.querySelector(".cv-address-output");

      nameDiv.innerHTML = person.name;
      emailDiv.innerHTML = emailIconHTML + person.email;
      numberDiv.innerHTML = phoneIconHTML + person.number;
      hometownDiv.innerHTML = addressIconHTML + person.address;
    }

    function onExperienceSubmit () {
      let roleDiv = document.querySelector(".cv-role");
      let companyDiv = document.querySelector(".cv-company");
      let roleDatesDiv = document.querySelector(".cv-role-dates");
      let roleDescriptionDiv = document.querySelector(".cv-role-description");

      roleDiv.innerHTML = person.role;
      companyDiv.innerHTML = person.company;
      roleDescriptionDiv.innerHTML = person.roleDescription;

      if ((person.roleStartDate !== "") && (person.roleEndDate !== "")) {
      roleDatesDiv.innerHTML = `${person.roleStartDate} - ${person.roleEndDate}`
      } else {
        roleDatesDiv.innerHTML = ""
      };
    }

    function onBasicInfoClear() {

      const basicInfoInputs = {
        $name : document.querySelector("#name"),
        $email : document.querySelector("#email"),
        $number : document.querySelector("#number"),
        $hometown : document.querySelector("#hometown"),
      }

      basicInfoInputs.$name.value = "";
      basicInfoInputs.$email.value = "";
      basicInfoInputs.$number.value = "";
      basicInfoInputs.$hometown.value = "";

      let newPerson = {...person, name: "", email: "", number: "", address: ""}

      setPerson(newPerson);
      onBasicInfoSubmit();
    }

    function onExperienceClear() {

      const experienceInputs = {
        $role : document.querySelector("#role"),
        $company : document.querySelector("#company"),
        $roleStartDate : document.querySelector("#role-start-date"),
        $roleEndDate : document.querySelector("#role-end-date"),
        $roleDescription : document.querySelector("#role-description")
      }

      experienceInputs.$role.value = "";
      experienceInputs.$company.value = "";
      experienceInputs.$roleStartDate = "";
      experienceInputs.$roleEndDate = "";
      experienceInputs.$roleDescription = "";

      let newPerson = {...person, role: "", company: "", roleStartDate: "", roleEndDate: "", roleDescription: ""}

      setPerson(newPerson);
      onExperienceSubmit();
    }

    function onEducationClear() {
      const educationInputs = {
        $degree : document.querySelector("#degree"),
        $university : document.querySelector("#university"),
        $uniStartDate : document.querySelector("#uni-start-date"),
        $uniEndDate : document.querySelector("#uni-end-date")
      }

      educationInputs.$degree.value = "";
      educationInputs.$university.value = "";
      educationInputs.$uniStartDate = "";
      educationInputs.$uniEndDate = "";

      let newPerson = {...person, degree: "", university: "", uniStartDate: "", uniEndDate: ""}

      setPerson(newPerson);
      onEducationSubmit();
    }

  return (
    <div className="grid-container">
    <BasicInfo
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onNumberChange={onNumberChange}
      onAddressChange={onAddressChange}
      onBasicInfoSubmit={onBasicInfoSubmit}
      onBasicInfoClear={onBasicInfoClear}
    />
    <Education
      onDegreeChange={onDegreeChange}
      onUniChange={onUniChange}
      onUniStartDateChange={onUniStartDateChange}
      onUniEndDateChange={onUniEndDateChange}
      onEducationSubmit={onEducationSubmit}
      onEducationClear={onEducationClear}
    />
    <Experience
      onRoleChange={onRoleChange}
      onCompanyChange={onCompanyChange}
      onRoleStartDateChange={onRoleStartDateChange}
      onRoleEndDateChange={onRoleEndDateChange}
      onRoleDescriptionChange={onRoleDescriptionChange}
      onExperienceSubmit={onExperienceSubmit}
      onExperienceClear={onExperienceClear}
    />
    <CVApp
      person={person}
      />
    </div>
  )
}

export default App

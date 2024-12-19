import { useState } from 'react'

export default function CVApp({person}) {

    const separator = {
        border: "1px solid black",
        width: "90%",
        margin: "0 0 0 20px"
    }

    return (
        <section className ="cv-section">
            <div className="container large-container">
                <div className="cv-basic-info-section">
                    <label label="cv-name" className="basic-info-label">
                        <div className="basic-info-output cv-name-output">{person.name}</div>
                    </label>
                    <div className="cv-basic-info-grid">
                        <label label="cv-email" className="basic-info-label">
                            <div className="basic-info-output cv-email-output">
                            <span className="icon"><svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="#ffffff" strokeWidth="1.5"><path fillRule="evenodd" clipRule="evenodd" d="M4 4.25C2.48122 4.25 1.25 5.48122 1.25 7V17C1.25 18.5188 2.48122 19.75 4 19.75H20C21.5188 19.75 22.75 18.5188 22.75 17V7C22.75 5.48122 21.5188 4.25 20 4.25H4ZM7.4301 8.38558C7.09076 8.14804 6.62311 8.23057 6.38558 8.5699C6.14804 8.90924 6.23057 9.37689 6.5699 9.61442L11.5699 13.1144C11.8281 13.2952 12.1719 13.2952 12.4301 13.1144L17.4301 9.61442C17.7694 9.37689 17.852 8.90924 17.6144 8.5699C17.3769 8.23057 16.9092 8.14804 16.5699 8.38558L12 11.5845L7.4301 8.38558Z" fill="#ffffff"></path></svg></span>
                                {person.email}</div>
                        </label>
                        <label label="cv-number" className="basic-info-label">
                            <div className="basic-info-output cv-number-output">
                            <span className="icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/></svg></span>
                                {person.number}</div>
                        </label>
                        <label label="cv-address" className="basic-info-label">
                            <div className="basic-info-output cv-address-output">
                                <span className="icon"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clipRule="evenodd"/></svg></span>
                                {person.address}</div>
                        </label>
                    </div>
                </div>
                <div className="cv-education-section">
                    <h2 className="section-title">Education</h2>
                    <div style={separator}></div>
                    <div className="cv-flex-container">
                        <div>
                            <label label="cv-degree">
                                <div className="cv-degree">{person.degree}</div>
                            </label>
                        </div>
                        <div>
                            <label label="cv-uni-dates">
                                <div className="cv-uni-dates">{person.uniStartDate} - {person.uniEndDate}</div>
                            </label>
                        </div>
                    </div>
                    <label label="cv-university">
                        <div className="cv-university">{person.university}</div>
                    </label>
                </div>
                <div className="cv-experience-section">
                    <h2 className="section-title">Experience</h2>
                    <div style={separator}></div>
                    <div className="cv-flex-container">
                        <label label="cv-role">
                            <div className="cv-role">{person.role}</div>
                        </label>
                        <label label="cv-role-dates">
                            <div className="cv-role-dates">{person.roleStartDate} - {person.roleEndDate}</div>
                        </label>
                    </div>
                    <label label="cv-company">
                        <div className="cv-company">{person.company}</div>
                    </label>
                    <label label="cv-role-description">
                        <div className="cv-role-description">{person.roleDescription}</div>
                    </label>
                </div>
            </div>
        </section>
    )
}
import { useState } from 'react'

export default function CVApp({person}) {
    const separator = {
        border: "2px solid black",
        width: "100%"
    }

    return (
        <section className ="cv-section">
            <div className="container large-container">
                <h1>CV</h1>
                <label label="cv-name">Name:
                    <div className="cv-name">{person.name}</div>
                </label>
                <label label="cv-email">Email:
                    <div className="cv-email">{person.email}</div>
                </label>
                <label label="cv-number">Number:
                    <div className="cv-number">{person.number}</div>
                </label>
                <label label="cv-address">Address:
                    <div className="cv-address">{person.address}</div>
                </label>
                <div style={separator}></div>
                <label label="cv-degree">Degree:
                    <div className="cv-degree">{person.degree}</div>
                </label>
                <label label="cv-university">University:
                    <div className="cv-university">{person.university}</div>
                </label>
                <label label="cv-uni-start-date">Start Date:
                    <div className="cv-uni-start-date">{person.uniStartDate}</div>
                </label>
                <label label="cv-uni-end-date">End Date:
                    <div className="cv-uni-end-date">{person.uniEndDate}</div>
                </label>
            </div>
        </section>
    )
}
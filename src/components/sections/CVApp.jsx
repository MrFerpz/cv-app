import { useState } from 'react'

export default function CVApp({person}) {

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
            </div>
        </section>
    )
}
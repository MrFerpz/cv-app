import { useState } from 'react'

export default function CVApp({name}) {

    return (
        <section className ="cv-section">
            <div className="container large-container">
                <h1>CV</h1>
                <label>Name:</label>
                <div className="cv-name">{name}</div>
            </div>
        </section>
    )
}
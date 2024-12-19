import { useState } from 'react'
import TextInput from '../features/TextInput'

export default function Education({onDegreeChange, onUniChange, onUniStartDateChange, onUniEndDateChange}) {
    return (
        <section className ="education-section">
            <div className="container">
                <h1>Education</h1>
                <TextInput
                    onChange={onDegreeChange}
                    inputID="degree"
                    label="Degree"
                />
                <TextInput
                    onChange={onUniChange}
                    inputID="university"
                    label="University"
                />
                <TextInput
                    onChange={onUniStartDateChange}
                    inputID="start-date"
                    label="Start Date"
                />
                <TextInput
                    onChange={onUniEndDateChange}
                    inputID="end-date"
                    label="End Date"
                />
            </div>
        </section>
    )
}
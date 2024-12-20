import { useState } from 'react'
import TextInput from '../features/TextInput'
import Button from '../features/Button'

export default function Education({onDegreeChange, onUniChange, onUniStartDateChange, onUniEndDateChange, onEducationSubmit, onEducationClear}) {

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
                <Button
                    onClick={onEducationClear}
                    id="education-clear"
                    label="education-clear"
                    className="clear-button"
                    text="CLEAR"
                />
                <Button 
                    onClick={onEducationSubmit}
                    id="education-submit"
                    label="education-submit"
                    className="submit-button"
                    text="SUBMIT"
                />
            </div>
        </section>
    )
}
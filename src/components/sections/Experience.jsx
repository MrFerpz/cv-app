import { useState } from 'react'
import TextInput from '../features/TextInput'
import Button from '../features/Button'

export default function Experience({onRoleChange, onCompanyChange, onRoleStartDateChange, onRoleEndDateChange, onRoleDescriptionChange, onExperienceSubmit, onExperienceEdit}) {
    return (
        <section className ="experience-section">
            <div className="container">
                <h1>Experience</h1>
                <TextInput
                    onChange={onRoleChange}
                    inputID="role"
                    label="Role"
                />
                <TextInput
                    onChange={onCompanyChange}
                    inputID="company"
                    label="Company"
                />
                <TextInput
                    onChange={onRoleStartDateChange}
                    inputID="role-start-date"
                    label="Start Date"
                />
                <TextInput
                    onChange={onRoleEndDateChange}
                    inputID="role-end-date"
                    label="End Date"
                />
                <TextInput
                    onChange={onRoleDescriptionChange}
                    inputID="role-description"
                    label="Role Description"
                />
                <Button
                    onClick={onExperienceEdit}
                    id="experience-edit"
                    label="experience-edit"
                    className="edit-button"
                    text="EDIT"
                />
                <Button 
                    onClick={onExperienceSubmit}
                    id="experience-submit"
                    label="experience-submit"
                    className="submit-button"
                    text="SUBMIT"
                />
            </div>
        </section>
    )
}
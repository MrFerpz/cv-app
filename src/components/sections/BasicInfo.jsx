import { useState } from 'react'
import TextInput from "../features/TextInput"
import Button from '../features/Button'

export default function BasicInfo({onNameChange, onEmailChange, onNumberChange, onAddressChange, onBasicInfoSubmit, onBasicInfoClear}) {
    return (
        <section className ="basic-info-section">
            <div className="container">
                <h1>Basic Information</h1>
                <div className = "input-box">
                    <TextInput
                        onChange={onNameChange}
                        inputID="name"
                        label="Name"
                    />
                    <TextInput
                        onChange={onEmailChange}
                        inputID="email"
                        label="Email"
                    />
                    <TextInput
                        onChange={onNumberChange}
                        inputID="number"
                        label="Number"
                    />
                    <TextInput
                        onChange={onAddressChange}
                        inputID="hometown"
                        label="Hometown"
                    />
                    <Button 
                        onClick={onBasicInfoClear}
                        id="basic-info-clear"
                        label="basic-info-clear"
                        className="clear-button"
                        text="CLEAR"
                    />
                    <Button
                        onClick={onBasicInfoSubmit}
                        id="basic-info-submit"
                        label="basic-info-submit"
                        className="submit-button"
                        text="SUBMIT">
                    </Button>
                </div>
            </div>
        </section>
    )
}
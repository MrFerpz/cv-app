import { useState } from 'react'
import TextInput from "../features/TextInput"

export default function BasicInfo({onNameChange, onEmailChange, onNumberChange, onAddressChange}) {
    return (
        <section className ="basic-info-section">
            <div className="container">
                <h1>Basic Information</h1>
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
                    label="Phone Number"
                />
                <TextInput
                    onChange={onAddressChange}
                    inputID="address"
                    label="Address"
                />
            </div>
        </section>
    )
}
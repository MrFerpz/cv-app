import { useState } from 'react'
import TextInput from "../features/TextInput"

export default function BasicInfo({value, onChange}) {
    return (
        <section className ="basic-info-section">
            <div className="container">
                <h1>Basic Information</h1>
                <TextInput
                    value={value}
                    onChange={onChange}
                    inputID="name"
                    label="Name"
                />
                <TextInput
                    value={value}
                    onChange={onChange}
                    inputID="email"
                    label="Email"
                />
                <TextInput
                    value={value}
                    onChange={onChange}
                    inputID="number"
                    label="Phone Number"
                />
                <TextInput
                    value={value}
                    onChange={onChange}
                    inputID="address"
                    label="Address"
                />
            </div>
        </section>
    )
}
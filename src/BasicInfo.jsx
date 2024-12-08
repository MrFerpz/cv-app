import { useState } from 'react'

export default function BasicInfo({value, onChange, label}) {
    return (
        <section className ="basic-info-section">
            <div className="container">
                <h1>Basic Information</h1>
                <label label = {label}>Name<br></br>
                    <input 
                    value={value} 
                    onChange={onChange}
                    id="name-input">
                    </input>
                </label>
            </div>
        </section>
    )
}
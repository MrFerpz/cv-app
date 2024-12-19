export default function TextInput({onChange, inputID, label}) {
    return (
        <div className = "text-input">
                <div className = "text-input-label">{label}</div>
                <label label = {label}>
                    <input
                    className = "text-input-box"
                    onChange={onChange}
                    id={inputID}>
                    </input>
                </label>
        </div>
    )
}
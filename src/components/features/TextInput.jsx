export default function TextInput({value, onChange, inputID, label}) {
    return (
        <div>
                <label label = {label}>{label}<br></br>
                    <input 
                    value={value} 
                    onChange={onChange}
                    id={inputID}>
                    </input>
                </label>
                <br></br>
        </div>
    )
}
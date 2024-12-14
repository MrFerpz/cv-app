export default function TextInput({onChange, inputID, label}) {
    return (
        <div>
                <label label = {label}>{label}<br></br>
                    <input 
                    onChange={onChange}
                    id={inputID}>
                    </input>
                </label>
                <br></br>
        </div>
    )
}
export default function Button({onClick, id, label, text, className}) {
    return (
        <button 
        label={label}
        id={id}
        className={className}
        onClick={onClick}>
            {text}
        </button>
    )
}
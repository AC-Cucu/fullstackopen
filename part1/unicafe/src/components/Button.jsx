const Button = ({onClick, text}) => {
    console.log('rendering Button...', text)
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
const Button = ({onSmash, text}) => {
    console.log('rendering Button...', text)
    return (
        <button onClick={onSmash}>
            {text}
        </button>
    )
}

export default Button
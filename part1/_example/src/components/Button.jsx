const Button = (props) => {
    console.log('rendering Button...', props)
    return (
        <>
            <button onClick={props.onClick}>
                {props.text}
            </button>          
        </>
    )
}

export default Button
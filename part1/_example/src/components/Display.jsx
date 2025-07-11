const Display = (props) => {
    console.log('rendering Display...', props)
    return (
        <>
            <div>{props.counter}</div>
        </>
    )
}

export default Display
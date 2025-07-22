const Part = (props) => {
    console.log('Part component rendered')
    console.log(props)
    return (
        <p>
            {props.part} {props.exercises}
        </p>        
    )
}

export default Part
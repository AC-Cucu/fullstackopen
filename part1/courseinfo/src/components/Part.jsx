const Part = (props) => {
    console.log('Part component rendered')
    return (
        <p>
            {props.part} {props.exercises}
        </p>        
    )
}

export default Part
const Total = (props) => {
    console.log('Total component rendered')
    console.log(props)
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    console.log('Total exercises:', totalExercises);

    return (
        <>
            <b>Number of exercises {totalExercises}</b>
        </>
    )
}

export default Total
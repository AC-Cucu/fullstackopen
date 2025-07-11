const Total = ({props}) => {
    console.log('Total component rendered')
    console.log(props)
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    )
}

export default Total
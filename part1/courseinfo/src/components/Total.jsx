const Total = ({props}) => {
    console.log('Total component rendered')
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    )
}

export default Total
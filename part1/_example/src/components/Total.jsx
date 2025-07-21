const Total = ({ total}) => {
    console.log('Total component rendered with total:', total)
    if (total === 0) {
        return null; // If total is 0, do not render anything
    }
    return (
        <p>total {total}</p>
    )
}

export default Total
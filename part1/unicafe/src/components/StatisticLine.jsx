const StatisticLine = ({text, counter}) => {
    console.log('rendering Statistic...', text, counter)
    if (text === 'positive') {
        return (
            <>
                <td>{text}</td>
                <td>{parseFloat(counter).toFixed(1)} %</td>
            </>
        )
    }
    else if (text === 'average') {
        return (
            <>
                <td>{text}</td>
                <td>{parseFloat(counter).toFixed(1)}</td>
            </>
        )
    }
    return (
        <>
            <td>{text}</td>
            <td>{counter}</td>
        </>
    )
}

export default StatisticLine
const StatisticLine = ({text, counter}) => {
    console.log('rendering Statistic...', text, counter)
    if (text === 'positive') {
        return <div>{text} {counter} %</div>
    }
    return (
        <div>{text} {counter}</div>
    )
}

export default StatisticLine
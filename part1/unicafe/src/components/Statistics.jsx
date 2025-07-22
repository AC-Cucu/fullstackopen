import StatisticLine from "./StatisticLine"

const Statistics = ({statistics}) => {
    console.log('rendering Statistic...', statistics)
    if (statistics.every(stat => stat.counter === 0)) {
        return <div>No feedback given</div>
    }
    return (
        <table>
            <tbody>
            <tr>
                <StatisticLine text={statistics[0].text} counter={statistics[0].counter} />
            </tr>
            <tr>
                <StatisticLine text={statistics[1].text} counter={statistics[1].counter} />
            </tr>
            <tr>
                <StatisticLine text={statistics[2].text} counter={statistics[2].counter} />
            </tr>
            <tr>
                <StatisticLine text={statistics[3].text} counter={statistics[3].counter} />
            </tr>
            <tr>
                <StatisticLine text={statistics[4].text} counter={statistics[4].counter} />
            </tr>
            <tr>
                <StatisticLine text={statistics[5].text} counter={statistics[5].counter} />
            </tr>
            </tbody>
        </table>
    )
}

export default Statistics
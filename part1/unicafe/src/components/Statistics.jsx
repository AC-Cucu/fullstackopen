const Statistics = ({statistics}) => {
    console.log('rendering Statistic...', statistics)
    if (statistics.every(stat => stat.counter === 0)) {
        return <div>No feedback given</div>
    } 
    else {
        return (
            <>
                <div>{statistics[0].text} {statistics[0].counter}</div>
                <div>{statistics[1].text} {statistics[1].counter}</div>
                <div>{statistics[2].text} {statistics[2].counter}</div>
                <div>{statistics[3].text} {statistics[3].counter}</div>
                <div>{statistics[4].text} {statistics[4].counter}</div>
                <div>{statistics[5].text} {statistics[5].counter}%</div>
            </>
        )
    }

}

export default Statistics
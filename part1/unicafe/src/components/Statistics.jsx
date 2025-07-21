const Statistics = ({text, counter}) => {
    console.log('rendering Statistic...', text, counter)
    return (        
        <div>{text} {counter}</div>
    )
}

export default Statistics
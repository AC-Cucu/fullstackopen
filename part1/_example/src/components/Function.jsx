import { useState } from "react"

const Function = () => {
    console.log('Function component rendered')
    const [value, setValue] = useState(10)

    // This is an example of a function that returns another function
    // For example, the function `hello('react')` will return () => {  console.log('hello', 'react')}
    // const hello = (who) => () => {
    //     console.log('hello', who)
    // }

    const setToValue = (newValue) => () => {
        console.log('setting value to', newValue)
        setValue(newValue)
    }
    // We could also declare the function like this:
    // const setToValue = (newValue) => {
    //     console.log('value now', newValue)
    //     setValue(newValue)
    // }
    //And in our JSX we would use it like this:
    // <button onClick={() => setToValue(1000)}>thousand</button>


    return (
            <div>
                {value}
                <button onClick={setToValue(1000)}>thousand</button>
                <button onClick={setToValue(0)}>reset</button>
                <button onClick={setToValue(value + 1)}>increment</button>
            </div>

    )

}

export default Function
import { useState } from "react"

import Button from "./Button"
import Display from "./Display"

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

    // Never declare a component inside another component
    // This is because it will create a new component every time the parent component renders, which can lead to performance issues.
    // For example, this is not allowed:
    // const Display = props => <div>{props.value}</div>

    return (
            <div>
                <Display value={value} />
                <Button onSmash={setToValue(1000)} text="thousand" />
                <Button onSmash={setToValue(0)} text="reset" />
                <Button onSmash={setToValue(value + 1)} text="increment" />
            </div>

    )

}

export default Function
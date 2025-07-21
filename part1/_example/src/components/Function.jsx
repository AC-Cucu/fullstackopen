import { useState } from "react"

const Function = () => {
    console.log('Function component rendered')
    const [value, setValue] = useState(10)

    const hello = () => {
        const handler = () => console.log('hello world')
        return handler
    }

    return (
            <div>
                {value}
                <button onClick={hello()}> button </button>
            </div>

    )

}

export default Function
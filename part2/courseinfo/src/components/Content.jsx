import Part from './Part';


const Content = (props) => {
    console.log('Content component rendered')
    console.log(props)
    return (
        <>
            {
                props.parts.map(part => (
                    <Part
                        key={part.name}
                        part={part.name}
                        exercises={part.exercises}
                    />
                ))
            }
        </>
    )
}

export default Content;
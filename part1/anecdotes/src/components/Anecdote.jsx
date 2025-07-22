import Header from "./Header"

const Anecdote = ({header, anecdote, votes }) => {
    return (
        <>
            <Header headingText={header} />
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </>
    )
}
export default Anecdote
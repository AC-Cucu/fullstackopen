const Header = (props) => {
    console.log('Header component rendered')
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}


export default Header
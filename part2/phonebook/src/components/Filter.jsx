const Filter = ({ value, onChange }) => {
    console.log('Filter component rendered with value:', value)
    return (
        <div>
            <p>Filter shown with: <input value={value} onChange={onChange} /></p>
        </div>
    )
}

export default Filter
const Filter = ({ value, onChange }) => {
    // <div className="filterInput">
    // <label>Find contacts by name</label>
    <input
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
    />
    // </div>
 }
export default Filter;
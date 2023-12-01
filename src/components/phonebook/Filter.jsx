const Filter = ({ value, onChange }) => {
    <input
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
    />
 }
export default Filter;
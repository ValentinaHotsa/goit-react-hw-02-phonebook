const ContactForm = ({ name, onChange, onSubmit }) => {
    return(
            <form onSubmit={onSubmit}>
                <label>Name</label>
            <input type="text" name='name' value={name} onChange={onChange} required />
                <button type='submit'>Add contact</button>
            </form>
        )
}
export default ContactForm;
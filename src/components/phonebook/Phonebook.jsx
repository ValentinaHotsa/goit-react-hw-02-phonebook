import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { nanoid } from 'nanoid'
class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    }

    textChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    }

    submit = evt => {
        evt.preventDefault();
        const { name, contacts } = this.state;
        if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            return;
        }
        const newContact = {
            id: nanoid(),
            name: this.state.name,
        };
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            name: '',
        }))
        
    }
    render() {
            const { name } = this.state;
            return (
                <div>
                    <h2>Phonebook</h2>
                    <ContactForm
                        name={name}
                        onChange={this.textChange}
                        onSubmit={this.submit} />
                    <ContactList
                        />
                </div>
            )
        }
}


export default Phonebook;
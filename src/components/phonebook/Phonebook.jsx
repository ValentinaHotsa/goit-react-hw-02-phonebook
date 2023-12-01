import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { nanoid } from 'nanoid'
class Phonebook extends Component {
    state = {
        contacts: [],
        name: '',
        filter: '',
        number: ''
    }

    change = (evt) => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    }

    submit = (evt) => {
        evt.preventDefault();
        const { name, contacts } = this.state;
        if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            return;
        }
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
        };
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            name: '',
            number: ''
        }));
        
    }
    filter = (value) => {
    this.setState({ filter: value });
  }
    render() {
        const { contacts, filter, showDeleted } = this.state;
    //     const filteredContacts = showDeleted
    //   ? contacts
    //   : contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
            return (
                <div>
                    <h2>Phonebook</h2>
                    <ContactForm
                        name={this.state.name}
                        number={this.state.number}
                        onChange={this.change}
                        onSubmit={this.submit} />
                    <Filter
                        value={filter}
                        onChange={this.filter}/>
                    <ContactList
                        contacts={contacts}
                        />
                </div>
            )
        }
}


export default Phonebook;
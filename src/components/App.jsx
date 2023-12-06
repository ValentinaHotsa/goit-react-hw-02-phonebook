import { Component } from "react";
import ContactForm from "components/contactForm/ContactForm";
import ContactList from "components/contactList/ContactList";
import Filter from "components/filter/Filter";
import css from "./App.module.css"
export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  addContact = newContact => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`);

    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }))
    }
  }
    deleteContact = (id) => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }));
    }
    changeFilter = evt => {
      this.setState({ filter: evt.target.value });
    };

    render() {
      const { filter, contacts } = this.state;
      const findContacts =  contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
      return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'rgb(59, 55, 55)',
            backgroundColor: '#eddfce'
          }}
        >
          <div className={css.container}>
          <h1 className={css.titlePage}>Phonebook</h1>
                    <ContactForm
            addContact={this.addContact} />
          
          <h2 className={css.titleList}>Contacts:</h2>
          
                     <ContactList
                        contacts={findContacts}
            deleteContact={this.deleteContact} /> 
          
                     <Filter
                changeFilter={this.changeFilter} filter={filter}/>
          </div>
          </div>
      
      );
    }
  
  }

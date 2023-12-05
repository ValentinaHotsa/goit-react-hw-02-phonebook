
import { Component } from "react";
import ContactForm from "components/contactForm/ContactForm";
import ContactList from "components/contactList/ContactList";
import Filter from "components/filter/Filter";
const Phonebook = () => {
    
    
     
    // render() {
    //     const { contacts, filter } = this.state;
    //     const filteredContacts =  contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
            return (
                <div>
                    <h1>Phonebook</h1>
                    <ContactForm
                        
                        onChange={this.onChange}
                        onSubmit={this.onSubmit} />
                    <h2>Contacts</h2>
                    <Filter
                        value={this.filter}
                        onChange={this.filter}/>
                    <ContactList
                        contacts={this.filteredContacts}
                        deleteContact={this.deleteContact}
                        />
                </div>
            )
        }



export default Phonebook;
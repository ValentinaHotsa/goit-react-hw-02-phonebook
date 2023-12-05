import { Component } from "react";
import Phonebook from "./phonebook/Phonebook";
export class App extends Component {

  state = {
        contacts: [],
        filter: '',
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
    filter = (value) => {
    this.setState({ filter: value });
  }
  render() {
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook />
      </div>
    );
  }
};

import { Component } from 'react';
import { nanoid } from 'nanoid'


export class ContactForm extends Component { 
    state = {
        name: '',
        number: '',
    }

    
    onChange = (evt) => {
        // const { name, number,value } = this.props;
        // const { name, number, value } = evt.target;
      
        this.setState({ name: evt.target.value });
        this.setState({ number: evt.target.value });
    }

    
    onSubmit = (evt) => {
        evt.preventDefault();
        const { name, number, contacts } = this.state;
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
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                  <label>Name
                     <input type="text" name='name' value={this.state.name} onChange={this.onChange} required />
                  </label>
                
                  <label>Number
                      <input type="tel" name='number' value={this.state.number} onChange={this.onChange} required />
                </label>
                
                <button type='submit'>Add contact</button>
            </form>
        )}
}
export default ContactForm;
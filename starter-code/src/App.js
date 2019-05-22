import React from "react";
import "./App.css";
import contacts from "./contacts";
import ContactCard from "./components/ContactCard";
import ListTags from "./components/ListTags";
const defaultContacts = contacts.splice(0, 5);

class App extends React.Component {
  state = {
    contacts: [...defaultContacts],
    allContacts: contacts
  };

  getRandomIndexNumber = () => {
    debugger;
    let randomIndex = Math.floor(Math.random() * contacts.length);
    return randomIndex;
  };

  handleRandomContact = () => {
    debugger;
    let randomContact = contacts[this.getRandomIndexNumber()];
    let contactAdded = [...this.state.contacts];
    contactAdded.unshift(randomContact);
    this.setState({ contacts: contactAdded });
  };

  handleNameSort = () => {
    let sortedContactsByName = [...this.state.contacts].sort(function(a, b) {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });
    this.setState({ contacts: sortedContactsByName });
  };

  handlePopSort = () => {
    let sortedContactsByPop = [...this.state.contacts].sort(function(a, b) {
      if (a.popularity < b.popularity) return 1;
      else if (a.popularity > b.popularity) return -1;
      else return 0;
    });
    this.setState({ contacts: sortedContactsByPop });
  };

  handleReset = () => {
    this.setState({ contacts: defaultContacts });
  };

  render() {
    let contactJSX = this.state.contacts.map(contact => {
      return (
        <ContactCard
          pictureUrl={contact.pictureUrl}
          name={contact.name}
          popularity={contact.popularity}
        />
      );
    });
    return (
      <div className="App">
        <ListTags />
        <div className="btn-container">
          <button onClick={this.handleRandomContact}>Add random contact</button>
          <button onClick={this.handleNameSort}>Sort by name</button>
          <button onClick={this.handlePopSort}>Sort by popularity</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
        {contactJSX}
      </div>
    );
  }
}

export default App;

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
    let randomIndex = Math.floor(Math.random() * contacts.length);
    return randomIndex;
  };

  handleRandomContact = () => {
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

  deleteContact = indexNum => {
    let newContactList = [...this.state.contacts];
    newContactList.splice(indexNum, 1);
    this.setState({ contacts: newContactList });
  };

  render() {
    let contactJSX = this.state.contacts.map((contact, index) => {
      return (
        <ContactCard
          pictureUrl={contact.pictureUrl}
          name={contact.name}
          popularity={contact.popularity}
          index={index.toString()}
          deleteContact={this.deleteContact}
        />
      );
    });
    return (
      <div>
        <div className="btn-container">
          <button onClick={this.handleRandomContact}>Add random contact</button>
          <button onClick={this.handleNameSort}>Sort by name</button>
          <button onClick={this.handlePopSort}>Sort by popularity</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
        <table className="App">
          <tbody>
            <ListTags />
            {contactJSX}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

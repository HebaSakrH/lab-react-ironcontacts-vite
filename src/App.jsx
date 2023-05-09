import { useState } from 'react'
import contacts from './contacts.json'
import './App.css'

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

  function handleAddRandom() {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    setFirstFive([...firstFive, randomContact]);
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="btn-container">
        <button onClick={handleAddRandom}>Add Random Contact</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th> 
            <th>Won Emmy</th> 
          </tr>
        </thead>
        <tbody>
          {firstFive.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <span role="img" aria-label="Oscar trophy">🏆</span> : null}</td> 
              <td>{contact.wonEmmy ? <span role="img" aria-label="Emmy trophy">🏆</span> : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App

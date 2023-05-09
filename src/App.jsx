import { useState } from 'react'
import contacts from './contacts.json'
import './App.css'

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0,5))
console.log(firstFive)
  return (
    <div className="App">
         <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {firstFive.map((contacts) => (
            <tr key={contacts.id}>
              <td>
                <img src={contacts.pictureUrl} alt={contacts.name} />
              </td>
              <td>{contacts.name}</td>
              <td>{contacts.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  


}

export default App

import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Display from './components/Display'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
      personService.
        getAll()
        .then(response => {
          setPersons(response.data) //persons holds each Person which has a name, number, and ID (generated by the server automatically)
          console.log(response.data)
        })
    }, [])

  const addPerson = (event) => {
    event.preventDefault() //so that the whole page won't reload because that's nomally what submit does 
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(p => p.name === personObject.name)) {
      alert(`${personObject.name} is already added to phonebook`);
    }
    else{
      personService
      .create(personObject) //add person to the Server 
      .then(response => {
        setPersons(persons.concat(response.data)) //display person on screen
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    personService.deleteObj(id)
    .then((response) => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <h4>Add a new Person</h4>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>

      <Display
        persons = {persons}
        deletePersonFunc = {deletePerson}
      />

    </div>
  )
}

export default App
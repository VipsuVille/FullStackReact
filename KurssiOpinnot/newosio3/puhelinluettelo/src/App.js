import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/persons'
import personService from './server/notes'

const App = () => {
  const [person, setPersons] = useState([])
  const [ newName, setNewName ] = useState('a new note')
  const [ newNumber, setNewNumber ] = useState('1234-23456')
  const [ filter, setNewFilter ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ positiveMessage, setPositiveMessage ] = useState(null)


    useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response)
    })
  }, [])
    

  const addNote = (event) => {
    event.preventDefault() 
     console.log('button clicked', event.target)
    const noteObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: person.length + 1
    }
    if (person.find(p => p.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook do we replase old number with new one?`)) {
      const personId = person.find(p=> p.name === newName)
      personService
      .update(personId.id, noteObject)
      .then(response => {
        setPersons(person.map(person => person.id !== personId.id ? person : response))
        setPositiveMessage(
          `Person '${noteObject.name}' is now changed number`
        )
        setTimeout(() => {
          setPositiveMessage(null)
        },5000)
        setNewName('')
        setNewNumber('')
      })
        
        .catch(error => {
          setErrorMessage(
          `Person '${noteObject.name}' was already removed from the server`
          )
          setTimeout(() => {
          setErrorMessage(null)
          
        }, 5000)
      })
       
       
      }
    }
    else {
    
  
    personService
    .create(noteObject)
    .then(response => {
      console.log(response)
      setPersons(person.concat(response))
      console.log(person)
      setNewName('')
      setNewNumber('')
      setPositiveMessage(
        `Person '${noteObject.name}' is now added`
      )
      setTimeout(() => {
        setPositiveMessage(null)
      },5000)
      }
      )
    
    
  }
}

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className = "positive">
        {message}
      </div>
    )
  }
  const ErrorNotification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className = "error">
        {message}
      </div>
    )
  }
  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }
  const removePerson = (persons) => {
    console.log(persons.id)
    if(window.confirm(`Delete ${persons.name}`)){
    personService
    .remove(persons.id)
    setPositiveMessage(
      `Person '${persons.name}' is now deleted`
    )
    setTimeout(() => {
      setPositiveMessage(null)
    },5000)
       setPersons(person.filter(p => p.id !== persons.id))
    
     
    
  }
}


  return ( 
    <div>
      <h1>Message</h1>
      <Notification message={positiveMessage} />
      <ErrorNotification message={errorMessage} />
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleFilter= {handleFilter} />

      <form onSubmit= {addNote}>
        <input 
        value={newName} 
        onChange={handleNoteChange}
        />
         <input 
        value={newNumber} 
        onChange={handleNumberChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons = {person} filter = {filter} button = {removePerson} />
    </div>
  )

  }
export default App;

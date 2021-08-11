import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './kompo/filter'
import InputPersons from './kompo/InputPersons'
import Phonebook from './kompo/Phonebook'
import noteService from './services/notes'
import Person from './kompo/persons'
import notes from './services/notes'

const App = () => {
    const [ person, setPerson] = useState([
      { name: 'Arto Hellas' }
    ])
    const [ newName, setName ] = useState('Gimme Name')
    const [ newNumber, setNumber ] = useState('Numberino')
    const [ filter, setFiltering] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [posMessage, setPosMessage] = useState(null)
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
      noteService
      .getAll()
      .then(response => {
        setPerson(response)
      })
    }, [])
const toggleImportance = id => {
  const note = person.find(n => n.id === id)
  const changeNote = { ...note, important: !note.important } 
  noteService
    .update(id, changeNote)
    .then(response => {
      setPerson(person.map(note => note.id !== id ? note : response))
        console.log('importance offf ' + id + 'needs to bwe toglet')
  })
  .catch(error => {
    setErrorMessage(
      `Note '${note.content}' was already removed from server`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  })
}
const addNote = (event) => {
 event.preventDefault()
  console.log('button clicked', event.target)
  const noteObject = {
    name: newName,
    number: newNumber,
    date: new Date().toISOString(),
    important: Math.random() > 0.5
  }
   if (person.map(p => p.name).includes(noteObject.name)) {
     var objekti = (person.find(el => el.name === newName))
   window.alert(`${newName} is already added to phonebook, we change the number if its not same`)
   noteService
   .update(objekti.id, {...objekti, number : newNumber})
   .then(response => {
     setPerson(person.map(note => note.name !== objekti.name ? note : response))
     setPosMessage(
      `Number '${noteObject.number}' is now added`
    )
    setTimeout(() => {
      setPosMessage(null)
    }, 5000)
   }
   
   )
   .catch(error => {
    setErrorMessage(
      `Note '${noteObject.name}' was already removed from server`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
    
    setPerson(person.filter(n => n.id !== noteObject.id))
  })

  setNumber('')
  setFiltering('')
    }  else {

noteService
.create(noteObject)
.then(response => {
  setPerson(person.concat(response))
  setName('')
  setPosMessage(
    `Person '${noteObject.name}' is now added`
  )
  setTimeout(() => {
    setPosMessage(null)
  }, 5000)
})

}
}
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return ( 
    <div className="error">
      {message}
    </div>
  )
}
const NotificationPositive = ({ message }) => {
  if (message === null ) {
    return null
  }
  return ( 
    <div className="positiveError">
      {message}
    </div>
  )
}
{/*const Toggle = ({ person, toggleImportance}) => {
  const label = person.important ? 'make not important' : 'make important'
  console.log("nyt tulee 66666666666666")
  return (
    <li className='note'>
      {person.content}
      <button onClick={toggleImportance}> {label} </button>
    </li>
  )
} */}
const handleRemove = (id) => {
  console.log(id)
  if (window.confirm ("really wanna delete")) {
    console.log(id)
  noteService
.letsRemove(id)
.then(resp => {
  setPerson(person.filter(person => person.id !== id ))
})}}


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style ={footerStyle}>
      <br />
      <em>Note app, Deparment of computer science un of helsink 2021</em>
    </div>
  )
}
const handleNoteChange = (event) => {
  console.log(event.target.value)
  setName(event.target.value)
}
const handleNoteChangeNumber = (event) => {
  setNumber(event.target.value)
  console.log(event.target.value)
  }
const handleIt = (event) => {
  setFiltering(event.target.value)
}
const notesToShow = showAll
? person
: person.filter(n => n.important) 
    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Search</h2>
        <NotificationPositive message={posMessage} />
        <Notification message={errorMessage} />
         <Filter filter = {filter} handleFilter = {handleIt}/>
        <h2>Add a new</h2>
       <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
    </button> 
    {notesToShow.map(note => <Person person = {note} toggleImportance = {() => toggleImportance(note.id)}/>)}
        {/*search engine*/}
        <InputPersons person = {person} setPersons = {setPerson} addNote = {addNote} name = {newName} handleNoteChange = {handleNoteChange} number = {newNumber} handleNoteChangeNumber = {handleNoteChangeNumber}/>
        <h2>Numbers</h2>
        {/*prints person list*/}
        {console.log(person)}
      <Phonebook persons = {person} filter = {filter} handleRemove = {handleRemove}/>


       <Person person = {person} handleRemove = {handleRemove} />
    <Footer />
      </div>
      
    )
    }
  
export default App;


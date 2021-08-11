import React from 'react'
import Person from './persons'
/*Prints person list to frontend*/
const Phonebook = ({persons, filter, handleRemove}) => {
const finder = !filter ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
if (finder.length > 10) {
    return ( 
        console.log("filtteröity!"),
        "be more spesific"
        )
   


{/* }}else if (finder.length === 1 ) {
    return (
        <ul>
        <h1>{finder[0].name}</h1>
        <li>Capital of the country is:&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            {finder[0].capital}</li>
            <li>amount of population:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            {finder[0].population}</li>
            <h2>Languages</h2>
            {finder[0].languages.map(note => <div key = {note.name}><ul><li>{note.name}</li></ul></div>)}
            <img src= {finder[0].flag} width= {300} height={300}></img>
        </ul>

        
    ) */}
}else 
return (
    <ul>
        {finder.map(note => <Person person = {note} key = {note.id} 
        name = {note.name} number = {note.number} handleRemove = {handleRemove}/>)}
    </ul>
   
)
}

export default Phonebook
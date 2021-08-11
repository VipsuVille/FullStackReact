import React from 'react'

const Person = ({ person, handleRemove, toggleImportance }) => {
    console.log(person)
    const label = person.important ? 'make not importantte' : "make importantte"
    return (
        <li>
            {person.name} {person.number} <button onClick={() => handleRemove(person)}>Deletoi</button> 
            <button onClick={toggleImportance}>{label}</button>
            { console.log("tulee yks ainakin liikaa?") }
        </li>
    )
}

export default Person
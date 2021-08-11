import React from 'react'

const Person = ({ person, handleRemove }) => {
    console.log(person) 
    return (
        <li>
            {person.name} {person.number} <button onClick={() => handleRemove(person.id)}>Deletoi</button> 
            { console.log("tulee yks ainakin liikaa?") }
        </li>
    )
}

export default Person
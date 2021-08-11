import React from 'react'

const Person = ({ person , button}) => {

  return (
        
         <p>{person.name} {person.number} <button onClick ={() => {button(person)}}>remove</button></p> 
        
    )
}

export default Person
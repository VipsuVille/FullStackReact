import React from 'react'
import Person from './person'

const Persons = ({persons, filter, button}) => {
    const showing = !filter ? persons : persons.filter(n => n.name.toLowerCase().includes(filter.toLowerCase()))
    return (
   <ul>
    {showing.map(p => <li key = {p.name}><Person person = {p} button = {button} /></li>)}
  </ul>)

  } 
    export default Persons
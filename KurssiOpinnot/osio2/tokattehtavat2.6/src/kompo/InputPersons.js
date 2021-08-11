import React from 'react'
/* Search if list contains input */
const InputPersons = (props) => {
    return ( 
        <form onSubmit = {props.addNote}>
        <div>
            <label>Name: </label>
            <input value = {props.newName} onChange = {props.handleNoteChange}/>
            </div>
            <div>
                <label>Number: </label>
                <input value = {props.newNumber} onChange = {props.handleNoteChangeNumber}/>

            </div>
            <div>
                <button type="submit">Sending information</button>
        </div>
        </form>
    )
}
export default InputPersons
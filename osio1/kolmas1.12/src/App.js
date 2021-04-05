import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Display = (prompt) => {
  return (
    <div>
        <p>{prompt.anecdotes} </p>
        <p>has {prompt.copy} votes</p>
    </div>
  )
}
const App = () => {
  
  const handleClickNext = () => {
    setSelected(Math.floor(Math.random() * 6))
  } 

  const [selected, setSelected] = useState(0)
      
      
  const [votes, setVotes] = useState([])

  const handleClickVote = () => {
    setVotes(previousVotes => {
        const copy = [...previousVotes];
        copy[selected] = (copy[selected] || 0) +1;
        setVotes(copy);
        console.log(copy)
        console.log(votes)
        })
  }
   const anecdotes = [
     'If it hurts, do it more often',
     'Adding manpower to a late software projets makes it later!',
     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
     'premature opitimization is the root of all eveil.',
     'Debuggin is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by defination, not smart enough debug it.'
   ]


      return (
        <div>
        <Display anecdotes={anecdotes[selected]} copy={votes} />
        <Button handleClick={handleClickNext} text="Seuraaava värssy" />
        <Button handleClick={handleClickVote} text="Vote" />
        </div>
      )
      
}

export default App;

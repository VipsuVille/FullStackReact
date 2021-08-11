import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Display = (prompt) => {
  return (
    <div>
        <h1>{prompt.title}</h1>
        <p>{prompt.anecdotes} </p>
        <p>has {prompt.copy} votes</p>
    </div>
  )
}
const Display2 = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.anecdotes}</p>
    </div>
  )
}
const App = () => {
  
  const handleClickNext = () => {
    setSelected(Math.floor(Math.random() * 6))
    return 
    votes
  }

  const [selected, setSelected] = useState(0)
          
  const [votes, setVotes] = useState([])

  const highestvalue = Math.max(...votes)
  console.log("highestvalue", {highestvalue})
  const UseThisValue = votes.indexOf(highestvalue)
  console.log("UseThosValue", {UseThisValue})
  const handleClickVote = () => {
    setVotes(previousVotes => {
        const copy = [...previousVotes];
        copy[selected] = (copy[selected] || 0) +1;
        console.log({UseThisValue})
        setVotes(copy); 
        return (
          copy
         
        )
        console.log({UseThisValue})
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
        <Display title="Värssy" anecdotes={anecdotes[selected]} copy={votes[selected]} />
        <Button handleClick={handleClickNext} text="Seuraaava värssy" />
        <Button handleClick={handleClickVote} text="Vote" />
        <Display2 title="Most voted Värssy" anecdotes={anecdotes[UseThisValue]}/>
        console.log({UseThisValue})
        </div>
      )
      
}

export default App;
